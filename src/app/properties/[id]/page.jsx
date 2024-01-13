"use client";

import { getHumanFormat, getUpdatedAtStatus } from "@/core/utils/datetimeUtils";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import PrimaryLoading from "@/core/components/loading/PrimaryLoading";
import PrimaryMaps from "@/core/components/maps/PrimaryMaps";
import PrimaryNavbar from "@/core/components/navbar/PrimaryNavbar";
import useDetailPropertiesViewModel from "@/features/properties/viewModels/useDetailPropertiesViewModel";

export default function Home({ params }) {
  const viewModel = useDetailPropertiesViewModel();

  useEffect(() => {
    viewModel.getDetailProperty(params.id);
    viewModel.getNearProperties();
  }, []);

  return (
    <main className="relative">
      <article className="container mx-auto">
        <PrimaryNavbar />
        {!viewModel.property ? (
          <div className="mt-[20rem]">
            <PrimaryLoading />
          </div>
        ) : (
          <section className="md:flex flex-row justify-between relative my-24">
            <div className="basis-1/3">
              <div>
                <div className="relative h-96 w-full">
                  <img
                    className="rounded-lg w-full h-full object-cover"
                    src={viewModel.property.image[viewModel.selectedImage]}
                    alt="Image"
                  />
                </div>
                <div className="flex flex-row space-x-5 mt-5">
                  {viewModel.property.image.map((row, index) => (
                    <div
                      onClick={() => {
                        viewModel.setSelectedImage(index);
                      }}
                      key={row}
                      className={`relative h-20 w-20 cursor-pointer ${
                        viewModel.property.image[viewModel.selectedImage] == row
                          ? "border-cyan-400"
                          : ""
                      } border-4 rounded-xl`}
                    >
                      <Image
                        className="rounded-lg"
                        src={row}
                        alt="Image"
                        fill
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:block bg-zinc-900 rounded-lg p-5 w-full mt-10">
                <h4 className="text-white text-xl mb-5">Price</h4>
                <p className="text-cyan-400 text-2xl mb-5">
                  {viewModel.property.price} ICP
                </p>{" "}
              </div>
              <div className="hidden md:block bg-zinc-900 rounded-lg p-5 w-full mt-10">
                <h4 className="text-white text-xl mb-2">Ownership History</h4>
                {viewModel.property.history.map((row) => (
                  <div key={row.id} className="flex flex-row mt-5">
                    <div className="mr-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="#62D9FF"
                          fill-opacity="0.3"
                        />
                        <circle
                          cx="9.99989"
                          cy="9.99989"
                          r="5.55556"
                          fill="#62D9FF"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white">
                        {getHumanFormat(Number(row.startDate))} - Now
                      </p>
                      <div className="flex flex-row items-center mt-5">
                        <Image
                          className="rounded-full object-cover w-[56px] h-[56px]"
                          width={56}
                          height={56}
                          src={
                            row.user.profileImageURL[0] || "/images/no-user.png"
                          }
                          alt="Image"
                        />
                        <div className="ml-5">
                          <p className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent text-lg">
                            {row.user.name}
                          </p>
                          <p className="text-gray-500">
                            {getHumanFormat(Number(row.startDate))} - Now
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="basis-2/3 md:pl-5 mt-5 md:mt-0">
              <div className="bg-zinc-900 rounded-lg p-5 w-full">
                <span className="text-gray-500 flex flex-row items-center">
                  <span className="bg-gradient-to-r from-cyan-400 to-orange-400 py-2 px-3 rounded-lg text-white">
                    {viewModel.property.category.hasOwnProperty("used")
                      ? "Used Home"
                      : "New Home"}
                  </span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full mx-3"></span>
                  <span className="italic">
                    {getUpdatedAtStatus(viewModel.property.updatedAt[0])}
                  </span>
                </span>
                <h3 className="text-white text-xl lg:text-2xl mt-10 mb-2">
                  {viewModel.property.name}
                </h3>
                <div className="md:flex items-center">
                  <p className="text-gray-500 flex flex-row items-center">
                    <Image
                      className="mr-2"
                      src="/svg/point.svg"
                      alt="Point"
                      width={15}
                      height={15}
                    />
                    {viewModel.property.address}
                  </p>
                  <span className="text-gray-500 flex flex-row items-center md:ml-5">
                    <span>3842 sq ft</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
                    <span>{viewModel.property.bedroom} Beds</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
                    <span>{viewModel.property.bathroom} Baths</span>
                  </span>
                </div>
                <div className="flex justify-center mt-10">
                  <Image
                    src="/svg/break-line.svg"
                    alt="Break Line"
                    width={700}
                    height={25}
                  />
                </div>
                <h4 className="text-white text-lg md:text-xl my-10 mb-2">
                  Property Description
                </h4>
                <p className="text-gray-500">
                  {viewModel.property.description}
                </p>
                <div className="flex flex-row justify-center items-center mt-10">
                  <div className="flex-1">
                    <p className="text-gray-500">Ground Floor</p>
                    <p className="text-white text-lg md:text-xl mt-5">
                      {viewModel.property.groundFloor}m<sup>2</sup>
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500">First Floor</p>
                    <p className="text-white text-lg md:text-xl mt-5">
                      {viewModel.property.firstFloor}m<sup>2</sup>
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500">Second Floor</p>
                    <p className="text-white text-lg md:text-xl mt-5">
                      {viewModel.property.secondFloor}m<sup>2</sup>
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500">Construction Area</p>
                    <p className="text-white text-lg md:text-xl mt-5">
                      {viewModel.property.construtionArea}m<sup>2</sup>
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center mt-10">
                  <div className="flex-1">
                    <p className="text-gray-500">Bedroom</p>
                    <p className="text-white text-lg md:text-xl mt-5">
                      {viewModel.property.bedroom}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500">Bathroom</p>
                    <p className="text-white text-lg md:text-xl mt-5">
                      {viewModel.property.bathroom}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500">Dining</p>
                    <p className="text-white text-lg md:text-xl mt-5">
                      {viewModel.property.dining}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500">Living Room</p>
                    <p className="text-white text-lg md:text-xl mt-5">
                      {viewModel.property.livingRoom}
                    </p>
                  </div>
                </div>
              </div>
              {/* hide on lg */}

              <div className="md:hidden bg-zinc-900 rounded-lg p-5 w-full mt-10">
                <h4 className="text-white text-lg md:text-xl mb-5">Price</h4>
                <p className="text-cyan-400 text-2xl mb-5">
                  {viewModel.property.price} ICP
                </p>{" "}
              </div>
              <div className="md:hidden bg-zinc-900 rounded-lg p-5 w-full mt-10">
                <h4 className="text-white text-lg md:text-xl mb-2">
                  Ownership History
                </h4>
                {viewModel.property.history.map((row) => (
                  <div key={row.id} className="flex flex-row mt-5">
                    <div className="mr-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="#62D9FF"
                          fill-opacity="0.3"
                        />
                        <circle
                          cx="9.99989"
                          cy="9.99989"
                          r="5.55556"
                          fill="#62D9FF"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white">
                        {getHumanFormat(Number(row.startDate))} - Now
                      </p>
                      <div className="flex flex-row items-center mt-5">
                        <Image
                          className="rounded-full object-cover w-[45px] h-[45px]"
                          width={45}
                          height={45}
                          src={
                            row.user.profileImageURL[0] || "/images/no-user.png"
                          }
                          alt="Image"
                        />
                        <div className="ml-5">
                          <p className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent text-lg">
                            {row.user.name}
                          </p>
                          <p className="text-gray-500">
                            {getHumanFormat(Number(row.startDate))} - Now
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* hide on lg */}
              <div className="bg-zinc-900 rounded-lg p-5 w-full mt-10">
                <h4 className="text-white text-lg md:text-xl mb-2">Location</h4>
                <p className="text-gray-500 flex flex-row items-center mb-3">
                  <Image
                    className="mr-2"
                    src="/svg/point.svg"
                    alt="Point"
                    width={15}
                    height={15}
                  />
                  {viewModel.property.address}
                </p>
                <div className="flex justify-center mt-10">
                  <Image
                    src="/svg/break-line.svg"
                    alt="Break Line"
                    width={700}
                    height={25}
                  />
                </div>
                <PrimaryMaps
                  readonly={true}
                  lat={Number(viewModel.property.latitude)}
                  lng={Number(viewModel.property.longitude)}
                />
              </div>
            </div>
          </section>
        )}
        {!viewModel.isLoading ? (
          <>
            <section>
              <h1 className="text-white text-xl lg:text-2xl mb-10">
                Similar Listings
              </h1>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {viewModel.isLoading
                  ? ""
                  : viewModel.nearProperties.map((row) => (
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
                        <h3 className="text-white text-xl lg:text-2xl mt-3 mb-2">
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
                        <p className="text-cyan-400 text-lg lg:text-2xl">
                          {Number(row.price)} ICP
                        </p>
                      </Link>
                    ))}
              </div>
            </section>
            <section className="mt-24">
              <hr className="border-gray-800" />
              <p className="text-gray-500 my-10">
                (c) 2023 TerraX. all Right Reserved
              </p>
            </section>
          </>
        ) : (
          ""
        )}
      </article>
    </main>
  );
}
