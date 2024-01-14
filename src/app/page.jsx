/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import Link from "next/link";
import PrimaryLoading from "@/core/components/loading/PrimaryLoading";
import PrimaryNavbar from "@/core/components/navbar/PrimaryNavbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import useHomeViewModel from "@/features/home/viewModels/useHomeViewModel";

export default function Home() {
  const viewModel = useHomeViewModel();

  useEffect(() => {
    viewModel.getNearProperties();
  }, []);

  return (
    <main className="relative">
      <div className="absolute z-0 top-96 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1365"
          height="1785"
          viewBox="0 0 1365 1785"
          fill="none"
        >
          <g filter="url(#filter0_f_58_1103)">
            <path
              d="M444.333 862.685C697.293 746.314 670.57 981.129 656.158 1084.56L-43.4536 1074C-57.4074 936.891 7.93945 689.233 90.0648 701.312C300.481 732.26 217.925 966.841 444.333 862.685Z"
              fill="#007397"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_58_1103"
              x="-745.34"
              y="0.88623"
              width="2110.12"
              height="1783.67"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="350"
                result="effect1_foregroundBlur_58_1103"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute z-0 bottom-16 right-0 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1428"
          height="1473"
          viewBox="0 0 1428 1473"
          fill="none"
        >
          <g filter="url(#filter0_f_58_1106)">
            <path
              d="M949.25 822.204C843.304 627.46 1125.7 715.165 1249.72 755.463L1137.6 1193.78C968.515 1161.23 675.945 1045.27 702.317 997.089C769.884 873.637 1044.08 996.506 949.25 822.204Z"
              fill="#007397"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_58_1106"
              x="0.648438"
              y="0.520996"
              width="1949.07"
              height="1893.26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="350"
                result="effect1_foregroundBlur_58_1106"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <article className="container mx-auto">
        <PrimaryNavbar />
        <motion.div
          initial={{ y: "40px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2, bounce: 0 }}
          className="absolute right-[15rem]"
        >
          <img
            src="/svg/pattern.svg"
            width={800}
            height={700}
            alt="Pattern"
            className="hidden lg:block"
          />
        </motion.div>
        <section className="md:flex flex-row items-center justify-between relative mt-14">
          <motion.div
            className="flex-1"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0,
            }}
          >
            <motion.div
              className="relative md:hidden"
              initial={{ y: "30px", opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                bounce: 0,
              }}
            >
              <img
                src="/images/hero.png"
                width={600}
                height={500}
                alt="Card Promotion"
                className="z-10 max-w-72"
              />
            </motion.div>
            <h1 className="text-white font-bold text-3xl lg:text-6xl">
              <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                Secure Your Property,{" "}
              </span>
              <br className="lg:hidden" />
              Get Your E-certificate Now!
              <div className="relative h-10 lg:h-20">
                <img
                  src="/svg/line.svg"
                  width={400}
                  height={100}
                  alt="Line"
                  className="absolute top-0 lg:-right-5 max-w-40 lg:max-w-auto"
                />
              </div>
            </h1>
            <p className="text-gray-500 lg:text-lg">
              With blockchain technology, now you can have e-certificate of your
              property/land for more secure ownership!
            </p>
            <div className="mt-10">
              <Link
                href="/properties"
                className="bg-cyan-400 px-5 py-3 rounded-lg mr-10 inline-block"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ y: "30px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0,
            }}
          >
            <motion.div
              className="relative hidden md:block"
              initial={{ y: "30px", opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                bounce: 0,
              }}
            >
              <img
                src="/images/hero.png"
                width={600}
                height={500}
                alt="Card Promotion"
                className="z-10"
              />
            </motion.div>
            <motion.div
              initial={{ y: "10px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2, bounce: 0 }}
              className="flex flex-row items-center justify-start lg:justify-center space-x-5 lg:space-x-20 my-10 lg:my-0"
            >
              <div>
                <h2 className="text-white font-bold text-xl lg:text-4xl">
                  56K<span className="text-cyan-300">+</span>
                </h2>
                <p className="text-white">Properties Registered</p>
              </div>
              <div>
                <h2 className="text-white font-bold text-xl lg:text-4xl">
                  10K<span className="text-cyan-300">+</span>
                </h2>
                <p className="text-white">Customer Satisfied</p>
              </div>
              <div>
                <h2 className="text-white font-bold text-xl lg:text-4xl">
                  100%
                </h2>
                <p className="text-white">Secure </p>
              </div>
            </motion.div>
          </motion.div>
        </section>
        <motion.section
          initial={{ y: "10px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 2, bounce: 0 }}
        >
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center space-x-6">
              <img src="/svg/lock.svg" width={25} height={25} alt="Lock Icon" />
              <h2 className="text-white text-md lg:text-3xl">
                Blockchain Security
              </h2>
              <p className="text-gray-500 lg:text-lg">
                Our platform has a strict security{" "}
                <br className="hidden lg:block" />
                system that is safe from name theft.
              </p>
            </div>
            <div className="flex-1">
              <img
                className="m-auto"
                src="/svg/star-light.svg"
                width={300}
                height={150}
                alt="Start Light"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mt-10 lg:mt-0">
            <div className="flex-1">
              <img
                className="m-auto"
                src="/svg/star-light.svg"
                width={300}
                height={150}
                alt="Start Light"
              />
            </div>
            <div className="flex flex-row items-center justify-center space-x-6">
              <img src="/svg/lock.svg" width={25} height={25} alt="Lock Icon" />
              <h2 className="text-white text-md lg:text-3xl">E-Certificate</h2>
              <p className="text-gray-500 lg:text-lg">
                We ensures ease and trust through e-certificates,
                <br /> making transactions straightforward and worry-free
              </p>
            </div>
          </div>
        </motion.section>
        <section>
          <div className="flex flex-row items-center justify-between my-10 lg:my-28">
            <h2 className="text-white font-bold text-3xl lg:text-5xl">
              Near You
            </h2>
            <Link
              passHref={true}
              href="/properties"
              className="bg-cyan-400 text-black px-5 py-3 rounded-lg flex flex-row items-center"
            >
              View All
              <img
                className="ml-5"
                src="/svg/arrow-btn-dark.svg"
                width={50}
                height={10}
                alt="Line"
              />{" "}
            </Link>
          </div>
        </section>
        <section>
          {viewModel.isLoading ? (
            <PrimaryLoading />
          ) : viewModel.nearProperties.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {viewModel.nearProperties.map((row) => (
                <Link
                  href={`/properties/${row.id}`}
                  key={row.id}
                  className="bg-zinc-900 rounded-lg p-5"
                >
                  <div className="relative h-[20rem] w-full">
                    <img
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
                  <h3 className="text-white text-xl lg:text-2xl mt-3 mb-2">
                    {row.name}
                  </h3>
                  <p className="text-gray-500 flex flex-row mb-3">
                    <img
                      className="mr-2"
                      src="/svg/point.svg"
                      alt="Point"
                      width={15}
                      height={15}
                    />
                    JL.Jeruk, Jakarta Selatan
                  </p>
                  <img
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
                  <p className="text-cyan-400 text-lg lg:text-2xl">
                    {Number(row.price)} ICP
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
        <motion.section
          initial={{ y: "10px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2, bounce: 0 }}
          className="md:flex flex-row items-center justify-between relative my-10 lg:my-28"
        >
          <div className="flex-1">
            <img
              src="/images/easy-process.png"
              width={600}
              height={500}
              alt="Card Promotion"
              className="z-10 md:hidden"
            />
            <h1 className="text-white font-bold text-3xl lg:text-7xl">
              Easy Process,
              <br />
              Easy Deal
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                Easy Money
              </span>
              <div className="relative h-10 lg:h-20">
                <img
                  src="/svg/line.svg"
                  width={400}
                  height={100}
                  alt="Line"
                  className="absolute lg:-top-3 left-26 max-w-40 lg:max-w-auto"
                />
              </div>
            </h1>
            <p className="text-gray-500 lg:text-lg">
              Wait for our future updates to start new experience of property
              transaction!
            </p>
            <div className="mt-10">
              <button className="bg-cyan-400 px-5 text-black py-3 rounded-lg mr-10">
                Get Updates in Email
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <img
                src="/images/easy-process.png"
                width={600}
                height={500}
                alt="Card Promotion"
                className="z-10 hidden md:block ml-24"
              />
            </div>
          </div>
        </motion.section>
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
