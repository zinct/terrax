"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AssetManager({ children }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  return (
    <main className="relative">
      <div
        className={`fixed z-20 top-0 w-full h-full flex items-center justify-center backdrop-blur-sm ${
          !show && "hidden"
        }`}
      >
        <div className="bg-zinc-900 rounded-lg w-96 p-10 space-y-5 text-center relative">
          <button
            onClick={() => setShow(!show)}
            className="absolute top-5 right-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18"
                stroke="#CCD2E3"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#CCD2E3"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="w-full flex justify-center">
            <Image
              src="/svg/terrax.svg"
              width={100}
              height={35}
              alt="TerraX Logo"
            />
          </div>
          <p className="text-white text-2xl font-bold">Sign Up To TerraX</p>
          <p className="text-gray-500">
            Pushing the boundaries of Web3 Property Marketplace.
          </p>
          <div>
            <Link
              href="/"
              className="bg-zinc-800 px-5 py-3 rounded-lg text-white hover:bg-zinc-700"
            >
              <Image
                className="inline-block mr-3"
                src="/images/icp.png"
                width={25}
                height={25}
                alt="ICP Logo"
              />
              Sign Up with Internet Identity
            </Link>
          </div>
          <p className="text-white text-sm">
            Already have an account?{" "}
            <Link href="/" className="text-cyan-500">
              Sign In
            </Link>
          </p>
          <p className="text-gray-500 text-sm">
            By continuing, you agree to our Terms of Service and our Privacy
            Policy
          </p>
        </div>
      </div>
      <article className="container mx-auto">
        <header className="flex flex-row items-center justify-between my-5">
          <div>
            <Image
              src="/svg/terrax.svg"
              width={117}
              height={42}
              alt="TerraX Logo"
            />
          </div>
          <nav>
            <ul className="flex flex-row items-center justify-center space-x-16 text-white">
              <li className="text-gray-300">Home</li>
              <li className="text-gray-300">Buy</li>
              <li className="text-gray-300">Sell</li>
              <li className="font-bold border-b-white border-b-2">
                Asset Manager
              </li>
            </ul>
          </nav>
          <div>
            <button
              onClick={() => setShow(!show)}
              className="w-24 h-12 text-white font-bold rounded-lg bg-gradient-to-r from-cyan-400 to-orange-400 p-1"
            >
              <div
                className="h-full rounded-lg py-2"
                style={{ backgroundColor: "#000a14" }}
              >
                Sign In
              </div>
            </button>
          </div>
        </header>
        <section className="flex flex-row items-center w-full">
          <Link
            href="/seller/asset-manager/all-property"
            className={`flex-1 p-5 text-center ${
              pathname === "/seller/asset-manager/all-property"
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "text-gray-500"
            }`}
          >
            ALL PROPERTY
          </Link>
          <Link
            href="/seller/asset-manager/e-certificate"
            className={`flex-1 p-5 text-center ${
              pathname === "/seller/asset-manager/e-certificate"
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "text-gray-500"
            }`}
          >
            E-CERTIFICATES
          </Link>
        </section>
        <section className="my-10">{children}</section>
        <section>
          <hr className="border-gray-800" />
          <p className="text-gray-500 my-10">
            (c) 2023 TerraX. all Right Reserved
          </p>
        </section>
      </article>
    </main>
  );
}
