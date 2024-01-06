import { v4 as uuidv4 } from "uuid";
import { Canister, ic, nat8, None, Null, Opt, Principal, query, Result, Some, StableBTreeMap, text, update, Vec, Void } from "azle";

import { ErrorResponse, User, UserPayload } from "./types";

const usersStore = StableBTreeMap<text, User>(1);

export default Canister({
  whoAmI: query([], text, () => {
    return ic.caller().toString();
  }),

  registerUser: update([UserPayload], Result(User, ErrorResponse), (payload) => {
    try {
      if (ic.caller().isAnonymous()) {
        return Result.Err({
          code: 400,
          message: "Anonymous is not allowed!",
        });
      }

      const duplicatedUser: User = usersStore.values().filter((c: User) => c.principal === ic.caller())[0];

      if (duplicatedUser) {
        return Result.Err({
          code: 400,
          message: "User already registered!",
        });
      }

      const newUser: User = {
        id: uuidv4(),
        principal: ic.caller(),
        createdAt: ic.time(),
        updatedAt: None,
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
});
