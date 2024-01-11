"use client";

import AuthContext from "@/core/contexts/AuthContext";
import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { useContext, useEffect, useState } from "react";

export default function useAssetManagerViewModel() {
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTab] = useState(0);
  const [properties, setProperties] = useState(0);
  const { authClient } = useContext(AuthContext);
  const [notAuthenticated, setNotAuthenticated] = useState(null);

  async function getProperties() {
    try {
      setIsLoading(true);
      const identity = await authClient.getIdentity();
      const terraxActor = makeTerraxActor({ identity });
      const response = await terraxActor.getCurrentProperties();
      setIsLoading(false);

      if (response.Ok) {
        setProperties(response.Ok);
      } else {
        setNotAuthenticated(true);
      }
    } catch (err) {
      console.error("Somethin went wrong with message,", err);
    }
  }

  useEffect(() => {
    getProperties();
  }, [authClient]);

  return {
    tab,
    notAuthenticated,
    setTab,
    isLoading,
    properties,
  };
}
