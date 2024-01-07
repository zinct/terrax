import { AuthClient } from "@dfinity/auth-client";
import { createActor as createTerraxActor, canisterId as terraxCanisterId } from "../../declarations/terrax";

export const makeActor = (canisterId, createActor, agentOptions) => {
  return createActor(canisterId, {
    agentOptions: {
      host: process.env.NEXT_PUBLIC_IC_HOST,
      ...agentOptions,
    },
  });
};

export function makeTerraxActor(agentOptions = {}) {
  return makeActor(terraxCanisterId, createTerraxActor, agentOptions);
}
