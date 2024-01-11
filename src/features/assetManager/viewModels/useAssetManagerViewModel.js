"use client";

import AuthContext from "@/core/contexts/AuthContext";
import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { useContext, useEffect, useState } from "react";

export default function useAssetManagerViewModel() {
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTab] = useState(0);
  const [properties, setProperties] = useState(0);
  const { authClient } = useContext(AuthContext);

  async function getProperties() {
    try {
      setIsLoading(true);
      const identity = await authClient.getIdentity();
      const terraxActor = makeTerraxActor({ identity });
      const response = await terraxActor.getCurrentProperties();
      setIsLoading(false);
      console.log(response);
      setProperties(response.Ok);
    } catch (err) {
      console.error("Somethin went wrong with message,", err);
    }
  }

  useEffect(() => {
    getProperties();
  }, [authClient]);

  return {
    tab,
    setTab,
    isLoading,
    properties,
  };
}
