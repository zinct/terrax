import { v4 as uuidv4 } from "uuid";
import { Canister, ic, None, query, Result, Some, StableBTreeMap, text, update, Vec } from "azle";

import { ErrorResponse, Property, PropertyHistory, PropertyParams, PropertyPayload, User, UserPayload } from "./types";
import { dummyProperties } from "./dummy";

const usersStore = StableBTreeMap<text, User>(1);
const propertiesStore = StableBTreeMap<text, Property>(10);

export default Canister({
  /**
   * Query function to retrieve the principal ID of the current authenticated user.
   * @returns Result<string, ErrorResponse> - Returns the principal ID if the query is successful, else returns an error response.
   */
  whoAmI: query([], text, () => {
    return ic.caller().toString();
  }),

  /**
   * Function to connect or authenticate a user.
   * @returns Result<User, ErrorResponse> - Returns the user information if authentication is successful, else returns an error response.
   */
  connectUser: update([], Result(User, ErrorResponse), () => {
    try {
      if (ic.caller().isAnonymous()) {
        return Result.Err({
          code: 400,
          message: "Anonymous is not allowed",
        });
      }

      const user: User = usersStore.values().filter((c: User) => c.principal.toString() === ic.caller().toString())[0];

      if (user) {
        return Result.Ok(user);
      }

      const newUser: User = {
        id: uuidv4(),
        principal: ic.caller(),
        isRegistered: false,
        createdAt: Some(ic.time()),
        updatedAt: Some(ic.time()),
        name: None,
        email: None,
        address: None,
        birth: None,
        phone: None,
        idCardImageURL: None,
        profileImageURL: None,
      };

      usersStore.insert(newUser.id, newUser);
      return Result.Ok(newUser);
    } catch (err) {
      return Result.Err({
        code: 500,
        message: "Internal server error with message " + err,
      });
    }
  }),

  /**
   * Function to register a user.
   * @param UserPayload - UserPayload containing user registration details.
   * @returns Result<User, ErrorResponse> - Returns the registered user information if successful, else returns an error response.
   */
  registerUser: update([UserPayload], Result(User, ErrorResponse), (payload) => {
    try {
      if (ic.caller().isAnonymous()) {
        return Result.Err({
          code: 400,
          message: "Anonymous is not allowed",
        });
      }

      const user: User = usersStore.values().filter((c: User) => c.principal.toString() === ic.caller().toString())[0];

      if (!user) {
        return Result.Err({
          code: 400,
          message: "Principal not registered",
        });
      }

      if (user?.isRegistered) {
        return Result.Err({
          code: 400,
          message: "User already registered",
        });
      }

      const newUser: User = {
        id: user.id,
        isRegistered: true,
        principal: ic.caller(),
        createdAt: Some(ic.time()),
        updatedAt: Some(ic.time()),

        // Payload
        name: Some(payload.name),
        email: Some(payload.email),
        address: Some(payload.address),
        birth: Some(payload.birth),
        phone: Some(payload.phone),
        idCardImageURL: Some(payload.idCardImageURL),
        profileImageURL: payload.profileImageURL,
      };

      usersStore.insert(user.id, newUser);
      return Result.Ok(newUser);
    } catch (err) {
      return Result.Err({
        code: 500,
        message: "Internal server error with message " + err,
      });
    }
  }),

  /**
   * Function to get a user by principal ID.
   * @returns Result<User, ErrorResponse> - Returns the user information if found, else returns an error response.
   */
  getUserByPrincipal: query([], Result(User, ErrorResponse), () => {
    try {
      const user: User = usersStore.values().filter((user) => user.principal.toString() === ic.caller().toString())[0];

      if (!user) {
        return Result.Err({
          code: 404,
          message: "User not registered on this principal",
        });
      }

      return Result.Ok(user);
    } catch (err) {
      return Result.Err({
        code: 500,
        message: "Internal server error with message " + err,
      });
    }
  }),

  /**
   * Function to create a new property.
   * @param PropertyPayload - PropertyPayload containing property details.
   * @returns Result<Property, ErrorResponse> - Returns the created property information if successful, else returns an error response.
   */
  createProperty: update([PropertyPayload], Result(Property, ErrorResponse), (payload) => {
    try {
      if (ic.caller().isAnonymous()) {
        return Result.Err({
          code: 400,
          message: "Anonymous is not allowed",
        });
      }

      const user: User = usersStore.values().filter((user) => user.principal.toString() === ic.caller().toString())[0];

      if (!user) {
        return Result.Err({
          code: 404,
          message: "User not registered",
        });
      }

      const newHistory: PropertyHistory = {
        user: user,
        startDate: ic.time(),
      };

      const newProperty: Property = {
        id: uuidv4(),
        owner: user,
        history: [
          newHistory,
        ],
        createdAt: ic.time(),
        updatedAt: Some(ic.time()),

        ...payload,
      };

      propertiesStore.insert(newProperty.id, newProperty);
      return Result.Ok(newProperty);
    } catch (err) {
      return Result.Err({
        code: 500,
        message: "Internal server error with message " + err,
      });
    }
  }),

  /**
   * Function to get a list of properties based on search parameters.
   * @param PropertyParams - PropertyParams containing search parameters.
   * @returns Result<Vec<Property>, ErrorResponse> - Returns a list of properties if successful, else returns an error response.
   */
  getProperties: query([PropertyParams], Result(Vec(Property), ErrorResponse), (params) => {
    try {
      const properties = propertiesStore.values();
      const filteredProperties: Property[] = properties.filter((property) => 
         property.name.toLowerCase().includes(params.name.toLocaleLowerCase()) && ('None' in params.category) ? true : JSON.stringify(property.category) === JSON.stringify(params.category.Some)
      );

      return Result.Ok(filteredProperties);
    } catch (err) {
      return Result.Err({
        code: 500,
        message: "Internal server error with message " + err,
      });
    }
  }),
  
  /**
   * Function to get the properties owned by the current authenticated user principal.
   * @returns Result<Vec<Property>, ErrorResponse> - Returns a list of properties owned by the user if successful, else returns an error response.
   */
  getCurrentProperties: query([], Result(Vec(Property), ErrorResponse), () => {
    try {
      if (ic.caller().isAnonymous()) {
        return Result.Err({
          code: 400,
          message: "Anonymous is not allowed",
        });
      }
      
      const properties = propertiesStore.values().filter((property) => property.owner.principal.toString() === ic.caller().toString());

      return Result.Ok(properties);
    } catch (err) {
      return Result.Err({
        code: 500,
        message: "Internal server error with message " + err,
      });
    }
  }),
  
  /**
   * Function to get a property by its ID.
   * @param id - Property ID.
   * @returns Result<Property, ErrorResponse> - Returns the property information if found, else returns an error response.
   */
  getProperty: query([text], Result(Property, ErrorResponse), (id) => {
    try {
      if(!id) {
        return Result.Err({
          code: 400,
          message: "Invalid property id",
        });
      }

      const property = propertiesStore.get(id);

      if('None' in property) {
        return Result.Err({
          code: 404,
          message: `Property with id ${id} not found`,
        });
      }

      return Result.Ok(property.Some);
    } catch (err) {
      return Result.Err({
        code: 500,
        message: "Internal server error with message " + err,
      });
    }
  }),

  /**
   * Function to validate the certificate of a property.
   * @param id - Property ID.
   * @returns Result<Property, ErrorResponse> - Returns the property information if the certificate is valid, else returns an error response.
   */
  validateCertificate: query([text], Result(Property, ErrorResponse), (id) => {
    try {
      if (ic.caller().isAnonymous()) {
        return Result.Err({
          code: 400,
          message: "Anonymous is not allowed",
        });
      }
      
      if(!id) {
        return Result.Err({
          code: 400,
          message: "Invalid property id",
        });
      }

      const property = propertiesStore.get(id);

      if('None' in property) {
        return Result.Err({
          code: 400,
          message: `Property certificate invalid`,
        });
      }

      if(property.Some.owner.principal.toString() !== ic.caller().toString()) {
        return Result.Err({
          code: 400,
          message: `Property certificate invalid`,
        });
      }

      return Result.Ok(property.Some);
    } catch (err) {
      return Result.Err({
        code: 500,
        message: "Internal server error with message " + err,
      });
    }
  }),


  // This is for development testing only
  generateDummyProperties: update([], text, () => {
    const newUser: User = {
      id: uuidv4(),
      isRegistered: true,
      principal: ic.caller(),
      createdAt: Some(ic.time()),
      updatedAt: Some(ic.time()),
      name: Some("Indra Mahesa"),
      email: Some("indramahesa128@gmail.com"),
      address: Some("St. Sydney"),
      birth: Some(ic.time()),
      phone: Some("08123123123"),
      idCardImageURL: Some("https://firebasestorage.googleapis.com/v0/b/terrax-de163.appspot.com/o/files%2Fimages%2Fprofile%2Fesmzy-hk4t2-4qkuj-ipdey-hrl3x-47uww-oll23-juhfz-aahnt-i4f6d-lae.jpeg?alt=media&token=4a1a0a9e-f310-4a91-8811-316000fe5704"),
      profileImageURL: Some("https://firebasestorage.googleapis.com/v0/b/terrax-de163.appspot.com/o/files%2Fimages%2Fprofile%2Fesmzy-hk4t2-4qkuj-ipdey-hrl3x-47uww-oll23-juhfz-aahnt-i4f6d-lae.jpeg?alt=media&token=4a1a0a9e-f310-4a91-8811-316000fe5704"),
    };

    usersStore.insert(newUser.id, newUser);

    const newHistory: PropertyHistory = {
      user: newUser,
      startDate: ic.time(),
    };

    dummyProperties.forEach((row) => {
        const newProperty: Property = {
          id: uuidv4(),
          owner: newUser,
          history: [
            newHistory,
          ],
          createdAt: ic.time(),
          updatedAt: Some(ic.time()),
          
          name: row.name,
          description: row.description,
          price: row.price,
          image: row.image,
          category: row.category,
          bedroom: row.bedroom,
          bathroom: row.bathroom,
          dining: row.dining,
          livingRoom: row.livingRoom,
          groundFloor: row.groundFloor,
          firstFloor: row.firstFloor,
          secondFloor: row.secondFloor,
          construtionArea: row.construtionArea,
          address: row.address,
          latitude: row.latitude,
          longitude: row.longitude,
        };

        propertiesStore.insert(newProperty.id, newProperty);
    });

    return "Success";
  }),
});
