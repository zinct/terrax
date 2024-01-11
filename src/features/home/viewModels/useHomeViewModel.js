"use client";

import AuthContext from "@/core/contexts/AuthContext";
import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { useContext, useState } from "react";

export default function useHomeViewModel() {
  const [nearProperties, setNearProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSignInModalShow, setIsSignInModalShow] = useState(false);

  async function getNearProperties() {
    try {
      setIsLoading(true);
      const terraxActor = makeTerraxActor();
      const response = await terraxActor.getProperties({
        name: "",
        category: [],
      });
      setNearProperties(response.Ok);
      setIsLoading(false);
    } catch (err) {
      console.error("Somethin went wrong with message,", err);
    }
  }

  return {
    isSignInModalShow,
    setIsSignInModalShow,
    getNearProperties,
    nearProperties,
    isLoading,
  };
}
