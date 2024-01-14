"use client";

import AuthContext from "@/core/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import SignInModal from "../modal/SignInModal";
import { useContext } from "react";
import useHomeViewModel from "@/features/home/viewModels/useHomeViewModel";
import { usePathname } from "next/navigation";

const PrimaryNavbar = ({
  onSignIn,
  isSignModalShow = null,
  onClose = null,
}) => {
  const pathName = usePathname();
  const viewModel = useHomeViewModel();
  const authContext = useContext(AuthContext);

  return (
    <>
      <SignInModal
        isSignModalShow={isSignModalShow}
        isShow={viewModel.isSignInModalShow && !authContext.user}
        isLoading={authContext.isLoading}
        onClose={() => {
          if (onClose) {
            return onClose();
          }
          viewModel.setIsSignInModalShow(false);
        }}
        onSignIn={authContext.connectIdentityProvider}
      />
      <header className="flex flex-row items-center justify-between my-5 z-50">
        <Link href="/">
          <img
            src="/svg/terrax.svg"
            width={117}
            height={42}
            alt="TerraX Logo"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex flex-row items-center justify-center space-x-16 text-white">
            <li
              className={`${
                pathName == "/"
                  ? "font-bold border-b-white border-b-2"
                  : "text-gray-300"
              } hover:cursor-pointer`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${
                pathName == "/properties"
                  ? "font-bold border-b-white border-b-2"
                  : "text-gray-300"
              } hover:cursor-pointer`}
            >
              <Link href="/properties">Properties</Link>
            </li>
            <li
              className={`${
                pathName == "/asset-manager"
                  ? "font-bold border-b-white border-b-2"
                  : "text-gray-300"
              } hover:cursor-pointer`}
            >
              <Link href="/asset-manager">Assets Manager</Link>
            </li>
          </ul>
        </nav>
        <div className="flex">
          {authContext.user ? (
            <>
              <div className="flex justify-center items-center space-x-5">
                <img
                  className="rounded-full object-cover w-[45px] h-[45px]"
                  width={45}
                  height={45}
                  src={
                    authContext.user.profileImageURL[0] || "/images/no-user.png"
                  }
                  alt="Image"
                  onClick={() => authContext.logout()}
                />
                {/* <button
                  className="hidden text-red-600 font-bold hover:bg-zinc-800 px-3 py-2 rounded-lg md:flex flex-row"
                  data-popover-target="popover-default"
                  onClick={() => {
                    authContext.logout();
                  }}
                >
                  <svg
                    className="mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="white"
                  >
                    <path
                      d="M10.5 2C10.5 1.17157 9.82843 0.5 9 0.5H4C2.067 0.5 0.5 2.067 0.5 4V16C0.5 17.933 2.067 19.5 4 19.5H8.5C9.32843 19.5 10 18.8284 10 18C10 17.1716 9.32843 16.5 8.5 16.5H4C3.72386 16.5 3.5 16.2761 3.5 16V4C3.5 3.72386 3.72386 3.5 4 3.5H9C9.82843 3.5 10.5 2.82843 10.5 2Z"
                      fill="rgb(224, 36, 36)"
                    />
                    <path
                      d="M7.5 10C7.5 9.17157 8.17157 8.5 9 8.5H13.207L12.9393 8.23223C12.3535 7.64645 12.3535 6.6967 12.9393 6.11091C13.5251 5.52513 14.4748 5.52513 15.0606 6.11091L17.889 8.93934C18.4748 9.52513 18.4748 10.4749 17.889 11.0607L15.0606 13.8891C14.4748 14.4749 13.5251 14.4749 12.9393 13.8891C12.3535 13.3033 12.3535 12.3536 12.9393 11.7678L13.207 11.5H9C8.17157 11.5 7.5 10.8284 7.5 10Z"
                      fill="rgb(224, 36, 36)"
                    />
                  </svg>
                  Logout
                </button> */}
              </div>
            </>
          ) : (
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
          )}{" "}
          <button className="md:hidden p-3 hover:bg-zinc-800 ml-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1_3031)">
                <path
                  d="M3 6L21 6"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M3 12L21 12"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M3 18L21 18"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_3031">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default PrimaryNavbar;
