"use client";

import AuthContext from "@/core/contexts/AuthContext";
import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { calculateDistance } from "@/core/utils/locationUtils";
import { useContext, useEffect, useState } from "react";

export default function useHomeViewModel() {
  const [nearProperties, setNearProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSignInModalShow, setIsSignInModalShow] = useState(false);

  async function getNearProperties(coordinate = null) {
    try {
      setIsLoading(true);
      const terraxActor = makeTerraxActor();
      const response = await terraxActor.getProperties({
        name: "",
        category: [],
      });

      if (response?.Ok) {
        setIsLoading(false);

        if (coordinate) {
          const sortedProperties = response.Ok;
          sortedProperties.sort((location1, location2) => {
            const distance1 = calculateDistance(
              coordinate.latitude,
              coordinate.longitude,
              Number(location1.latitude),
              Number(location1.longitude)
            );
            const distance2 = calculateDistance(
              coordinate.latitude,
              coordinate.longitude,
              Number(location2.latitude),
              Number(location2.longitude)
            );

            return distance1 - distance2;
          });

          return setNearProperties(sortedProperties.slice(0, 6));
        } else {
          return setNearProperties(response.Ok.slice(0, 6));
        }
      } else {
        console.error(response);
      }
    } catch (err) {
      console.error("Somethin went wrong with message,", err);
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getNearProperties({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return {
    isSignInModalShow,
    setIsSignInModalShow,
    getNearProperties,
    nearProperties,
    isLoading,
  };
}
