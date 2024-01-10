"use client";

import { useState } from "react";

export default function useHomeViewModel() {
  const [isSignInModalShow, setIsSignInModalShow] = useState(false);

  return { isSignInModalShow, setIsSignInModalShow };
}
