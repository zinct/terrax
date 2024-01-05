import { v4 as uuidv4 } from "uuid";
import { Canister, ic, None, Null, Opt, Principal, query, Result, Some, StableBTreeMap, text, update, Vec, Void } from "azle";

import { User, UserPayload } from "./types";

const usersStore = StableBTreeMap<text, User>(1);

export default Canister({
  connectUser: update([UserPayload], Result(User, text), (payload) => {
    try {
      if (ic.caller().isAnonymous()) {
        return Result.Err("caller is anonymous");
      }

      const duplicatedUser: User = usersStore.values().filter((c: User) => c.principal === ic.caller() || c.email === payload.email)[0];

      if (duplicatedUser.principal === ic.caller()) {
        return Result.Ok(duplicatedUser);
      }

      if (duplicatedUser.email === payload.email) {
        return Result.Err("Email already registered!");
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
      return Result.Err("Somethin went wrong with message [" + err + "]");
    }
  }),

  getUsers: query([], Result(Vec(User), text), () => {
    const users = usersStore.values();
    if (users.length == 0) {
      return Result.Err("Software is empty");
    }

    return Result.Ok(users);
  }),
});
