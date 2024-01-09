"use client";

import { AuthClient } from "@dfinity/auth-client";
import { createContext, useEffect, useState } from "react";
import { makeTerraxActor } from "../services/actorLocatorService";
import { useRouter } from "next/navigation";

const AuthContext = createContext();
const identityProvider = "http://127.0.0.1:4943/?canisterId=bkyz2-fmaaa-aaaaa-qaaaq-cai";

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [authClient, setAuthClient] = useState(null);

  async function initAuth() {
    const newAuthClient = await AuthClient.create();
    setAuthClient(newAuthClient);
  }
  async function checkLogin() {
    setIsLoading(true);
    const isAuthenticated = await authClient.isAuthenticated();
    setIsLoading(false);

    console.log("isAuthenticated", isAuthenticated);

    if (isAuthenticated) {
      const identity = await authClient.getIdentity();
      const terraxActor = makeTerraxActor({ identity });

      const response = await terraxActor.connectUser();

      if (response.Ok.isRegistered) {
        setUser(response.Ok);
      }
    }
  }

  async function connectIdentityProvider() {
    await authClient.login({
      identityProvider,
      onSuccess: () => {
        handleAuthentication();
      },
      onError: (err) => {
        console.log("ERROR WHEN LOGIN", err);
      },
    });
  }

  async function handleAuthentication() {
    setIsLoading(true);
    const identity = await authClient.getIdentity();
    const terraxActor = makeTerraxActor({ identity });
    const response = await terraxActor.connectUser();
    setIsLoading(false);

    if (response.Ok.isRegistered) {
      setUser(response.Ok);
    } else {
      router.push("/register");
    }
  }

  useEffect(() => {
    initAuth();
  }, []);

  return <AuthContext.Provider value={{ authClient, isLoading, connectIdentityProvider, user, authClient }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
