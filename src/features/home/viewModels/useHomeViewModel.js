"use client";

import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { AuthClient } from "@dfinity/auth-client";
import moment from "moment";
import { useState } from "react";

export default function useHomeViewModel() {
  const [isSignInModalShow, setIsSignInModalShow] = useState(false);

  return { isSignInModalShow, setIsSignInModalShow };
}
