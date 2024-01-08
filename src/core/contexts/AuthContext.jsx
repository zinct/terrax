"use client";

import { AuthClient } from "@dfinity/auth-client";
import { createContext, useEffect, useState } from "react";
import { makeTerraxActor } from "../services/actorLocatorService";
import { useRouter } from "next/navigation";

const AuthContext = createContext();
const identityProvider = "http://127.0.0.1:4943/?canisterId=bkyz2-fmaaa-aaaaa-qaaaq-cai";

export const AuthProvider = ({ children }) => {
  let authClient;

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  async function initalAuth() {
    authClient = await AuthClient.create();

    checkLogin();
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
        console.log("ERROR WHEN LOGIN");
      },
    });
  }

  async function handleAuthentication() {
    const identity = await authClient.getIdentity();
    const terraxActor = makeTerraxActor({ identity });

    const response = await terraxActor.connectUser();

    if (response.Ok.isRegistered) {
      setUser(response.Ok);
    } else {
      router.push("/register");
    }
  }

  useEffect(() => {
    initalAuth();
  }, []);

  return <AuthContext.Provider value={{ authClient, isLoading, connectIdentityProvider }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
