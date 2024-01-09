"use client";

import Image from "next/image";
import { useState } from "react";

export default function AllProperty() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className={`fixed z-20 top-0 w-full h-full flex items-center justify-center backdrop-blur-sm ${
          !show && "hidden"
        }`}
      >
        <div className="bg-zinc-900 rounded-lg w-1/2 p-10 space-y-3 relative">
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
          <p className="text-white text-2xl font-bold">Review Offers</p>
          <p className="text-gray-500">
            Review incoming offers for Rumah Full-Furnish di Jaksel
          </p>
          <hr className="border-gray-800" />
          <p className="text-white">Offers</p>
          <div className="border-2 border-cyan-400 rounded-lg p-3">
            <div className="flex flex-row items-center mt-5">
              <Image
                className="rounded-lg"
                width={56}
                height={56}
                src="/images/user.png"
                alt="Image"
              />
              <div className="flex-1">
                <div className="flex flex-row">
                  <div className="flex-1 ml-5">
                    <p className="text-white">Andi Kurniadi</p>
                    <p className="text-gray-500">#NA110107</p>
                  </div>
                  <div className="flex-1 text-right">
                    <p className="text-cyan-400">Offers</p>
                    <p className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent font-bold">
                      5 ETH
                    </p>
                  </div>
                </div>
                <span className="text-gray-500 flex flex-row items-center ml-5">
                  <span>
                    <strong>0 </strong>Failed Transaction
                  </span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
                  <span>
                    <strong>0 </strong>Success Transaction
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-row space-x-5 mt-5">
              <button
                onClick={() => alert("accept")}
                className="flex-1 bg-cyan-400 px-5 py-3 rounded-lg"
              >
                Accept
              </button>
              <button
                onClick={() => alert("decline")}
                className="flex-1 bg-zinc-800 px-5 py-3 rounded-lg text-white"
              >
                Decline
              </button>
            </div>
          </div>
          <p className="text-white">Accepted Offers</p>
          <div>
            <div className="flex flex-row items-center mt-5">
              <Image
                className="rounded-lg"
                width={56}
                height={56}
                src="/images/user.png"
                alt="Image"
              />
              <div className="flex-1">
                <div className="flex flex-row">
                  <div className="flex-1 ml-5">
                    <p className="text-white">Andi Kurniadi</p>
                    <p className="text-gray-500">#NA110107</p>
                  </div>
                  <div className="flex-1 text-right">
                    <p className="text-cyan-400">Offers</p>
                    <p className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent font-bold">
                      5 ETH
                    </p>
                  </div>
                </div>
                <span className="text-gray-500 flex flex-row items-center ml-5">
                  Accepted since <strong> 7 January 2024</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="bg-zinc-900 rounded-lg p-5">
          <div className="relative h-56 w-full">
            <Image
              className="rounded-lg"
              src="/images/img1.png"
              alt="Image"
              fill
            />
            <span className="absolute top-3 left-3 bg-orange-400 py-1 px-3 rounded-lg text-white">
              Used Home
            </span>
          </div>
          <h3 className="text-white text-2xl mt-3 mb-2">
            Rumah Full-Furnish di Jaksel
          </h3>
          <p className="text-gray-500 flex flex-row mb-3">
            <Image
              className="mr-2"
              src="/svg/point.svg"
              alt="Point"
              width={15}
              height={15}
            />
            JL.Jeruk, Jakarta Selatan
          </p>
          <Image
            src="/svg/break-line.svg"
            alt="Break Line"
            width={500}
            height={25}
          />
          <p className="text-gray-500 flex flex-row items-center my-3">
            <span>3842 sq ft</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
            <span>4 Beds</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
            <span>3 Baths</span>
          </p>
          <p className="text-cyan-400 text-2xl">30.20 ETH</p>
          <button
            onClick={() => setShow(!show)}
            className="bg-cyan-400 hover:bg-cyan-500 px-5 py-3 rounded-lg flex flex-row items-center justify-center w-full mt-5"
          >
            Check Offering
            <Image
              className="ml-5"
              src="/svg/arrow-btn-dark.svg"
              width={50}
              height={10}
              alt="Line"
            />{" "}
          </button>
        </div>
        <div className="bg-zinc-900 rounded-lg p-5">
          <div className="relative h-56 w-full">
            <Image
              className="rounded-lg"
              src="/images/img1.png"
              alt="Image"
              fill
            />
            <span className="absolute top-3 left-3 bg-orange-400 py-1 px-3 rounded-lg text-white">
              Used Home
            </span>
          </div>
          <h3 className="text-white text-2xl mt-3 mb-2">
            Rumah Full-Furnish di Jaksel
          </h3>
          <p className="text-gray-500 flex flex-row mb-3">
            <Image
              className="mr-2"
              src="/svg/point.svg"
              alt="Point"
              width={15}
              height={15}
            />
            JL.Jeruk, Jakarta Selatan
          </p>
          <Image
            src="/svg/break-line.svg"
            alt="Break Line"
            width={500}
            height={25}
          />
          <p className="text-gray-500 flex flex-row items-center my-3">
            <span>3842 sq ft</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
            <span>4 Beds</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
            <span>3 Baths</span>
          </p>
          <p className="text-cyan-400 text-2xl">30.20 ETH</p>
          <button
            onClick={() => setShow(!show)}
            className="bg-cyan-400 hover:bg-cyan-500 px-5 py-3 rounded-lg flex flex-row items-center justify-center w-full mt-5"
          >
            Check Offering
            <Image
              className="ml-5"
              src="/svg/arrow-btn-dark.svg"
              width={50}
              height={10}
              alt="Line"
            />{" "}
          </button>
        </div>
        <div className="bg-zinc-900 rounded-lg p-5">
          <div className="relative h-56 w-full">
            <Image
              className="rounded-lg"
              src="/images/img1.png"
              alt="Image"
              fill
            />
            <span className="absolute top-3 left-3 bg-orange-400 py-1 px-3 rounded-lg text-white">
              Used Home
            </span>
          </div>
          <h3 className="text-white text-2xl mt-3 mb-2">
            Rumah Full-Furnish di Jaksel
          </h3>
          <p className="text-gray-500 flex flex-row mb-3">
            <Image
              className="mr-2"
              src="/svg/point.svg"
              alt="Point"
              width={15}
              height={15}
            />
            JL.Jeruk, Jakarta Selatan
          </p>
          <Image
            src="/svg/break-line.svg"
            alt="Break Line"
            width={500}
            height={25}
          />
          <p className="text-gray-500 flex flex-row items-center my-3">
            <span>3842 sq ft</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
            <span>4 Beds</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
            <span>3 Baths</span>
          </p>
          <p className="text-cyan-400 text-2xl">30.20 ETH</p>
          <button
            onClick={() => setShow(!show)}
            className="bg-cyan-400 hover:bg-cyan-500 px-5 py-3 rounded-lg flex flex-row items-center justify-center w-full mt-5"
          >
            Check Offering
            <Image
              className="ml-5"
              src="/svg/arrow-btn-dark.svg"
              width={50}
              height={10}
              alt="Line"
            />{" "}
          </button>
        </div>
        <div className="bg-zinc-900 rounded-lg p-5">
          <div className="relative h-56 w-full">
            <Image
              className="rounded-lg opacity-15"
              src="/images/img1.png"
              alt="Image"
              fill
            />
            <span className="absolute top-3 left-3 bg-zinc-800 py-1 px-3 rounded-lg text-white">
              Sold
            </span>
          </div>
          <h3 className="text-white text-2xl mt-3 mb-2">
            Rumah Full-Furnish di Jaksel
          </h3>
          <p className="text-gray-500 flex flex-row mb-3">
            <Image
              className="mr-2"
              src="/svg/point.svg"
              alt="Point"
              width={15}
              height={15}
            />
            JL.Jeruk, Jakarta Selatan
          </p>
          <Image
            src="/svg/break-line.svg"
            alt="Break Line"
            width={500}
            height={25}
          />
          <p className="text-gray-500 flex flex-row items-center my-3">
            <span>3842 sq ft</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
            <span>4 Beds</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
            <span>3 Baths</span>
          </p>
        </div>
      </div>
    </div>
  );
}
