import { v4 as uuidv4 } from "uuid";
import { Canister, ic, nat16, query, Result, Some, StableBTreeMap, text, update, Vec } from "azle";

import { ErrorResponse, Property, PropertyParams, PropertyPayload, User, UserPayload } from "./types";

const usersStore = StableBTreeMap<text, User>(1);
const propertiesStore = StableBTreeMap<text, Property>(10);

export default Canister({
  whoAmI: query([], text, () => {
    return ic.caller().toString();
  }),

  registerUser: update([UserPayload], Result(User, ErrorResponse), (payload) => {
    try {
      if (ic.caller().isAnonymous()) {
        return Result.Err({
          code: 400,
          message: "Anonymous is not allowed",
        });
      }

      const duplicatedUser: User = usersStore.values().filter((c: User) => c.principal === ic.caller())[0];

      if (duplicatedUser) {
        return Result.Err({
          code: 400,
          message: "User already registered",
        });
      }

      const newUser: User = {
        id: uuidv4(),
        principal: ic.caller(),
        createdAt: ic.time(),
        updatedAt: Some(ic.time()),
        ...payload,
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

  connectUser: query([], Result(User, ErrorResponse), () => {
    try {
      if (ic.caller().isAnonymous()) {
        return Result.Err({
          code: 400,
          message: "Anonymous is not allowed!",
        });
      }

      const user: User = usersStore.values().filter((c: User) => c.principal === ic.caller())[0];

      if (user) {
        return Result.Ok(user);
      }

      return Result.Err({
        code: 400,
        message: "Principal not registered!",
      });
    } catch (err) {
      return Result.Err({
        code: 500,
        message: "Internal server error with message " + err,
      });
    }
  }),

  getUsers: query([], Result(Vec(User), ErrorResponse), () => {
    try {
      const users = usersStore.values();
      return Result.Ok(users);
    } catch (err) {
      return Result.Err({
        code: 500,
        message: "Internal server error with message " + err,
      });
    }
  }),

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

      const newProperty: Property = {
        id: uuidv4(),
        owner: user,
        history: [],
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

  emptyProperty: update([], text, () => {
    const arr = propertiesStore.keys();
    for (let i = 0; i < arr.length; i++) {
      propertiesStore.remove(arr[i]);
    }

    return "ok";
  }),

  getProperty: query([PropertyParams], Result(Vec(Property), ErrorResponse), (params) => {
    try {
      const properties = propertiesStore.values();

      return Result.Ok(properties);
    } catch (err) {
      return Result.Err({
        code: 500,
        message: "Internal server error with message " + err,
      });
    }
  }),
});
