"use client";

import AuthContext from "@/core/contexts/AuthContext";
import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { useContext, useEffect, useState } from "react";

export default function useRegistrationViewModel() {
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTab] = useState(0);
  const { authClient } = useContext(AuthContext);

  const [propertyCategory, setPropertyCategory] = useState("new");

  return {
    tab,
    propertyCategory,
    setPropertyCategory,
    setTab,
    isLoading,
  };
}
