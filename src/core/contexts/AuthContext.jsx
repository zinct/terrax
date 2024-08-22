"use client";

import { AuthClient } from "@dfinity/auth-client";
import { createContext, useEffect, useState } from "react";
import { makeTerraxActor } from "../services/actorLocatorService";
import { useRouter } from "next/navigation";

const AuthContext = createContext();
const identityProvider = "https://identity.ic0.app";

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [authClient, setAuthClient] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  async function checkLogin() {
    const createAuthClient = await AuthClient.create();
    setAuthClient(createAuthClient);

    const isAuthenticated = await createAuthClient.isAuthenticated();

    if (isAuthenticated) {
      const identity = await createAuthClient.getIdentity();
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
    setIsLoading(true);

    const identity = await authClient.getIdentity();
    const terraxActor = makeTerraxActor({ identity });

    const response = await terraxActor.connectUser();

    if (response.Ok.isRegistered) {
      setIsLoading(false);
      setUser(response.Ok);
      router.push("/");
    } else {
      await router.push("/register");
      setIsLoading(false);
    }
  }

  async function logout() {
    console.log("object");
    await authClient.logout();
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authClient,
        isLoading,
        connectIdentityProvider,
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
