import { createActor as createTerraxActor, canisterId as terraxCanisterId } from "../../declarations/terrax";

export const makeActor = (canisterId, createActor, agent = {}) => {
  console.log("agent2", agent);
  return createActor(canisterId, {
    // agent: agent,
    agentOptions: {
      host: process.env.NEXT_PUBLIC_IC_HOST,
      identity: agent,
      // ...agent,
    },
  });
};

export function makeTerraxActor(agent) {
  return makeActor(terraxCanisterId, createTerraxActor, agent);
}
