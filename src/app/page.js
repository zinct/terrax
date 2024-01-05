"use client";

import { Actor, HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { backend } from "../declarations/backend";

export default function Home() {
  async function onLogin() {
    const authClient = await AuthClient.create();

    if (await authClient.isAuthenticated()) {
      handleAuthenticated(authClient);
      return;
    }

    await authClient.login({
      onSuccess: () => {
        handleAuthenticated(authClient);
      },
      onError: (err) => {
        console.log("ERROR", err);
      },
    });
  }

  async function handleAuthenticated(authClient) {
    const identity = await authClient.getIdentity();

    console.log("identity", identity);
    console.log("AuthClient", authClient);

    const test = await backend.connectUser("Indra Mahesa", "indramahesa128@gmail.com", "Bandung", 2000, [0]);

    console.log("TEST", test);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={onLogin}>Login</button>
    </main>
  );
}
