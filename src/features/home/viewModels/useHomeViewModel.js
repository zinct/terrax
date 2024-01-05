"use client";

import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { Actor, HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import moment from "moment";

export default function useHomeViewModel() {
  async function handleConnectAccount() {
    try {
      const authClient = await AuthClient.create();
      if (await authClient.isAuthenticated()) {
        handleAuthenticated(authClient);
        return;
      }
      await authClient.login({
        identityProvider: "http://127.0.0.1:4943/?canisterId=be2us-64aaa-aaaaa-qaabq-cai",
        onSuccess: () => {
          // handleAuthenticated(authClient);
        },
        onError: (err) => {
          // console.log("ERROR", err);
        },
      });
    } catch (err) {}
  }

  async function handleAuthenticated(authClient) {
    try {
      const identity = await authClient.getIdentity();
      const agent = new HttpAgent({ identity });

      const terraxActor = makeTerraxActor(identity);

      const test = await terraxActor.connectUser({
        email: "indramahesa128@gmail.com",
        address: "Bandung",
        birth: moment().unix(),
        name: "Indra Mahesa",
        idCard: [10, 20],
        phone: "081395749557",
      });
      console.log("TEST", test);
    } catch (err) {
      console.log("Err", err);
    }
  }

  return {
    handleConnectAccount,
  };
}
