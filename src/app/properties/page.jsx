"use client";

import PrimaryNavbar from "@/core/components/navbar/PrimaryNavbar";
import usePropertiesViewModel from "@/features/properties/viewModels/usePropertiesViewModel";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import PrimaryLoading from "@/core/components/loading/PrimaryLoading";

const Page = () => {
  const viewModel = usePropertiesViewModel();

  useEffect(() => {
    viewModel.getProperties();
  }, []);

  return (
    <>
      <div className="absolute z-0 -top-32">
        <svg
          className="max-w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="1410"
          height="1267"
          viewBox="0 0 1410 1267"
          fill="none"
        >
          <g filter="url(#filter0_f_58_1586)">
            <path
              d="M519.161 337.533C710.263 212.862 710.799 422.508 708.927 515.081L149.438 566.382C125.529 446.535 154.631 222.204 221.317 225.751C392.176 234.841 348.118 449.119 519.161 337.533Z"
              fill="#007397"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_58_1586"
              x="-558.836"
              y="-474.29"
              width="1968.07"
              height="1740.67"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="350"
                result="effect1_foregroundBlur_58_1586"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute z-0 -bottom-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1280"
          height="1280"
          viewBox="0 0 1280 1280"
          fill="none"
        >
          <g filter="url(#filter0_f_58_1424)">
            <path
              d="M532.333 862.685C785.293 746.314 758.57 981.129 744.158 1084.56L44.5466 1074C30.5928 936.891 95.9397 689.233 178.065 701.312C388.482 732.26 305.925 966.841 532.333 862.685Z"
              fill="#007397"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_58_1424"
              x="-657.34"
              y="0.886169"
              width="2110.12"
              height="1783.67"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="350"
                result="effect1_foregroundBlur_58_1424"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <main className="relative">
        <article className="container mx-auto">
          <PrimaryNavbar />
          <section className="flex flex-row items-center justify-between relative my-24">
            <div className="flex-1">
              <h1 className="text-white font-bold text-7xl">
                <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                  Search and Buy
                </span>{" "}
                Secure
                <br /> Property or Land Here!
              </h1>
              <p className="text-gray-500 text-lg">
                With blockchain technology, now you can do property transactions
                effortlessly and completed within 7 days or less.
              </p>
              <div className="mt-10 space-x-5 flex">
                <div className="flex">
                  <input
                    className="py-3 px-5 w-80 rounded-l-lg text-black"
                    type="text"
                    value={viewModel.keyword}
                    onChange={(e) => {
                      viewModel.setKeyword(e.target.value);
                    }}
                    placeholder="What are you looking for?"
                  ></input>
                  <button
                    className="font-bold rounded-r-lg bg-white p-3 px-5"
                    onClick={() => {
                      viewModel.getProperties();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M11.552 22.25C5.9254 22.25 1.34448 17.65 1.34448 12C1.34448 6.35 5.9254 1.75 11.552 1.75C17.1785 1.75 21.7594 6.35 21.7594 12C21.7594 17.65 17.1785 22.25 11.552 22.25ZM11.552 3.25C6.74199 3.25 2.83826 7.18 2.83826 12C2.83826 16.82 6.74199 20.75 11.552 20.75C16.3619 20.75 20.2656 16.82 20.2656 12C20.2656 7.18 16.3619 3.25 11.552 3.25Z"
                        fill="#6F6F73"
                      />
                      <path
                        d="M22.0088 23.2499C21.8196 23.2499 21.6304 23.1799 21.481 23.0299L19.4893 21.0299C19.2005 20.7399 19.2005 20.2599 19.4893 19.9699C19.7781 19.6799 20.2561 19.6799 20.5449 19.9699L22.5366 21.9699C22.8254 22.2599 22.8254 22.7399 22.5366 23.0299C22.3872 23.1799 22.198 23.2499 22.0088 23.2499Z"
                        fill="#6F6F73"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  className={`text-white font-bold rounded-lg py-3 px-5 ${
                    viewModel.category == null
                      ? "bg-gradient-to-r from-cyan-400 to-orange-400"
                      : "border-2 from-cyan-400 "
                  }`}
                  onClick={() => {
                    viewModel.handleChangeCategory(null);
                  }}
                >
                  All
                </button>
                <button
                  className={`text-white font-bold rounded-lg py-3 px-5 ${
                    viewModel.category == "used"
                      ? "bg-gradient-to-r from-cyan-400 to-orange-400"
                      : "border-2 from-cyan-400 "
                  }`}
                  onClick={() => {
                    viewModel.handleChangeCategory("used");
                  }}
                >
                  Used Home
                </button>
                <button
                  className={`text-white font-bold rounded-lg py-3 px-5 ${
                    viewModel.category == "new"
                      ? "bg-gradient-to-r from-cyan-400 to-orange-400"
                      : "border-2 from-cyan-400 "
                  }`}
                  onClick={() => {
                    viewModel.handleChangeCategory("new");
                  }}
                >
                  New Home
                </button>
                <button
                  className={`text-white font-bold rounded-lg py-3 px-5 ${
                    viewModel.category == "land"
                      ? "bg-gradient-to-r from-cyan-400 to-orange-400"
                      : "border-2 from-cyan-400 "
                  }`}
                  onClick={() => {
                    viewModel.handleChangeCategory("land");
                  }}
                >
                  Land
                </button>
              </div>
            </div>
          </section>
          <section>
            {viewModel.isLoading ? (
              <PrimaryLoading />
            ) : viewModel.properties.length > 0 ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {viewModel.properties.map((row) => (
                  <Link
                    href={`/properties/${row.id}`}
                    key={row.id}
                    className="bg-zinc-900 rounded-lg p-5"
                  >
                    <div className="relative h-[20rem] w-full">
                      <Image
                        className="rounded-lg object-cover"
                        src={row.image[0]}
                        alt="Image"
                        fill
                      />
                      <span className="absolute top-3 left-3 bg-orange-400 py-1 px-3 rounded-lg text-white">
                        {row.category.hasOwnProperty("used")
                          ? "Used Home"
                          : "New Home"}
                      </span>
                    </div>
                    <h3 className="text-white text-2xl mt-3 mb-2">
                      {row.name}
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
                      <span>{row.bedroom} Beds</span>
                      <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
                      <span>{row.bathroom} Baths</span>
                    </p>
                    <p className="text-cyan-400 text-2xl">
                      {Number(row.price)} ETH
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-y-5">
                <img className="w-44" src="images/not-found.png" alt="" />
                <div className="flex flex-col items-center">
                  <p className="font-bold text-[24px] text-[#F3F3F3]">
                    Result Not Found
                  </p>
                  <p className="font-bold text-[16px] text-[#6F6F73]">
                    Please try again with another keywords or maybe use generic
                    term
                  </p>
                </div>
              </div>
            )}
          </section>
          <section className="mt-24">
            <hr className="border-gray-800" />
            <p className="text-gray-500 my-10">
              (c) 2023 TerraX. all Right Reserved
            </p>
          </section>
        </article>
      </main>
    </>
  );
};

export default Page;
