"use client";

import AuthContext from "@/core/contexts/AuthContext";
import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { useContext, useState } from "react";

export default function useDetailPropertiesViewModel() {
  const [property, setProperty] = useState(null);
  const [nearProperties, setNearProperties] = useState([]);
  const [isNearPropertiesLoading, setIsNearPropertiesLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  async function getDetailProperty(id) {
    setIsLoading(true);
    const terraxActor = makeTerraxActor();
    const response = await terraxActor.getProperty(id);
    setProperty(response.Ok);
    setIsLoading(false);
  }

  async function getNearProperties() {
    setIsLoading(true);
    const terraxActor = makeTerraxActor();
    const response = await terraxActor.getProperties({
      name: "",
      category: [],
    });

    if (response?.Ok) {
      setNearProperties(response.Ok.slice(0, 3));
      setIsLoading(false);
    } else {
      console.error(response);
    }
  }

  return {
    property,
    nearProperties,
    getNearProperties,
    getDetailProperty,
    isLoading,
    selectedImage,
    setSelectedImage,
  };
}
