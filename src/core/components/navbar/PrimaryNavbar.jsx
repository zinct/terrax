"use client";

import { useContext, useEffect } from "react";
import AuthContext from "@/core/contexts/AuthContext";
import Link from "next/link";
import useHomeViewModel from "@/features/home/viewModels/useHomeViewModel";
import SignInModal from "../modal/SignInModal";
import Image from "next/image";

const PrimaryNavbar = ({ onSignIn }) => {
  const viewModel = useHomeViewModel();
  const authContext = useContext(AuthContext);

  return (
    <>
      <SignInModal
        isShow={viewModel.isSignInModalShow && !authContext.user}
        isLoading={authContext.isLoading}
        onClose={() => viewModel.setIsSignInModalShow(false)}
        onSignIn={authContext.connectIdentityProvider}
      />
      <header className="flex flex-row items-center justify-between my-5 z-50">
        <Link href="/">
          <Image
            src="/svg/terrax.svg"
            width={117}
            height={42}
            alt="TerraX Logo"
          />
        </Link>
        <nav>
          <ul className="flex flex-row items-center justify-center space-x-16 text-white">
            <li className="font-bold border-b-white border-b-2 hover:cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-300">
              <Link href="/properties">Buy</Link>
            </li>
            <li className="text-gray-300">Sell</li>
            <li className="text-gray-300">Asset Manager</li>
          </ul>
        </nav>
        <button
          className="w-24 h-12 text-white d-flex items-center justify-between font-medium rounded-[11px] bg-gradient-to-r from-cyan-400 to-orange-400 p-[2.5px] hover:cursor-pointer"
          onClick={() => viewModel.setIsSignInModalShow(true)}
        >
          <div
            className="h-full rounded-lg py-2 hover:cursor-pointer"
            style={{ backgroundColor: "#000a14" }}
          >
            Sign In
          </div>
        </button>
      </header>
    </>
  );
};

export default PrimaryNavbar;
