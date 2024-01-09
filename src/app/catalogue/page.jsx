"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
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
          <p className="text-white text-2xl font-bold">Start Offering</p>
          <p className="text-gray-500">
            Submit Your Best Offer for a Premium Deal!
          </p>
          <div className="flex flex-row items-center">
            <div className="bg-zinc-800 px-5 py-3 rounded-l-lg text-white hover:bg-zinc-700">
              <Image
                className="inline-block mr-3"
                src="/images/icp.png"
                width={25}
                height={25}
                alt="ICP Logo"
              />
            </div>
            <input
              className="py-3 px-5 w-full rounded-r-lg bg-zinc-800 text-white"
              type="number"
              placeholder="Enter amount"
            ></input>
          </div>
          <button
            onClick={() => alert("buy")}
            className="bg-gradient-to-r from-cyan-400 to-orange-400 px-5 py-3 rounded-lg w-full"
          >
            Submit Offering
          </button>
          <p className="text-gray-500 text-sm">
            By continuing you agree to our{" "}
            <Link href="https://www.google.com" className="text-cyan-500">
              Terms and Condition
            </Link>
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
              <li className="font-bold text-white border-b-2">Buy</li>
              <li className="text-gray-300">Sell</li>
              <li className="text-gray-300">Asset Manager</li>
            </ul>
          </nav>
          <div className="flex justify-center items-center space-x-5">
            <button onClick={() => alert("notif")}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#1B1B21" />
                <path
                  d="M30.2914 26.1344L29.4342 24.7116C29.2542 24.3944 29.0914 23.7944 29.0914 23.443V21.2744C29.0914 19.2601 27.9085 17.5201 26.2028 16.7059C25.7571 15.9173 24.9342 15.4287 23.9914 15.4287C23.0571 15.4287 22.2171 15.9344 21.7714 16.7316C20.0999 17.563 18.9428 19.2859 18.9428 21.2744V23.443C18.9428 23.7944 18.7799 24.3944 18.5999 24.703L17.7342 26.1344C17.3914 26.7087 17.3142 27.343 17.5285 27.9259C17.7342 28.5001 18.2228 28.9459 18.8571 29.1601C20.5199 29.7259 22.2685 30.0001 24.0171 30.0001C25.7657 30.0001 27.5142 29.7259 29.1771 29.1687C29.7771 28.9716 30.2399 28.5173 30.4628 27.9259C30.6857 27.3344 30.6257 26.683 30.2914 26.1344Z"
                  fill="#7A797D"
                />
                <path
                  d="M26.4258 30.866C26.0658 31.8603 25.1143 32.5717 24 32.5717C23.3229 32.5717 22.6543 32.2974 22.1829 31.8089C21.9086 31.5517 21.7029 31.2089 21.5829 30.8574C21.6943 30.8746 21.8058 30.8831 21.9258 30.9003C22.1229 30.926 22.3286 30.9517 22.5343 30.9688C23.0229 31.0117 23.52 31.0374 24.0172 31.0374C24.5058 31.0374 24.9943 31.0117 25.4743 30.9688C25.6543 30.9517 25.8343 30.9431 26.0058 30.9174C26.1429 30.9003 26.28 30.8831 26.4258 30.866Z"
                  fill="#7A797D"
                />
              </svg>
            </button>
            <button onClick={() => alert("user")}>
              <Image
                className="rounded-lg"
                width={48}
                height={48}
                src="/images/no-user.png"
                alt="Image"
              />
            </button>
          </div>
        </header>
        <section className="flex flex-row justify-between relative my-24">
          <div className="basis-1/3">
            <div>
              <div className="relative h-96 w-full">
                <Image
                  className="rounded-lg"
                  src="/images/img1.png"
                  alt="Image"
                  fill
                />
              </div>
              <div className="flex flex-row space-x-5 mt-5">
                <div className="relative h-20 w-full border-cyan-400 border-4 rounded-xl">
                  <Image
                    className="rounded-lg"
                    src="/images/img1.png"
                    alt="Image"
                    fill
                  />
                </div>
                <div className="relative h-20 w-full">
                  <Image
                    className="rounded-lg"
                    src="/images/img1.png"
                    alt="Image"
                    fill
                  />
                </div>
                <div className="relative h-20 w-full">
                  <Image
                    className="rounded-lg"
                    src="/images/img1.png"
                    alt="Image"
                    fill
                  />
                </div>
                <div className="relative h-20 w-full">
                  <Image
                    className="rounded-lg"
                    src="/images/img1.png"
                    alt="Image"
                    fill
                  />
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-lg p-5 w-full mt-10">
              <h4 className="text-white text-xl mb-5">Price</h4>
              <p className="text-cyan-400 text-2xl mb-5">30.20 ETH</p>{" "}
              <button
                onClick={() => setShow(!show)}
                className="bg-cyan-400 hover:bg-cyan-500 px-5 py-3 rounded-lg flex flex-row items-center justify-center w-full"
              >
                Start offer{" "}
                <Image
                  className="ml-5"
                  src="/svg/arrow-btn-dark.svg"
                  width={50}
                  height={10}
                  alt="Line"
                />{" "}
              </button>
            </div>
            <div className="bg-zinc-900 rounded-lg p-5 w-full mt-10">
              <h4 className="text-white text-xl mb-2">Ownership History</h4>
              <div className="flex flex-row mt-5">
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
                  <p className="text-white">24 Dec 2020 - Now</p>
                  <div className="flex flex-row items-center mt-5">
                    <Image
                      className="rounded-lg"
                      width={56}
                      height={56}
                      src="/images/user.png"
                      alt="Image"
                    />
                    <div className="ml-5">
                      <p className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent text-lg">
                        Andi Kurniadi
                      </p>
                      <p className="text-gray-500">24 Dec 2020 - Now</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-5">
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
                  <p className="text-gray-500">2 Apr 2013 - 24 Dec 2020</p>
                  <div className="flex flex-row items-center mt-5">
                    <Image
                      className="rounded-lg"
                      width={56}
                      height={56}
                      src="/images/no-user.png"
                      alt="Image"
                    />
                    <div className="ml-5">
                      <p className="text-white text-lg">Andi Kurniadi</p>
                      <p className="text-gray-500">24 Dec 2020 - Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-2/3 pl-5">
            <div className="bg-zinc-900 rounded-lg p-5 w-full">
              <span className="text-gray-500 flex flex-row items-center">
                <span className="bg-gradient-to-r from-cyan-400 to-orange-400 py-2 px-3 rounded-lg text-white">
                  Used Home
                </span>
                <span className="w-1 h-1 bg-gray-500 rounded-full mx-3"></span>
                <span className="italic">Updated 2 days ago</span>
              </span>
              <h3 className="text-white text-2xl mt-10 mb-2">
                Rumah Full-Furnish di Jaksel
              </h3>
              <p className="text-gray-500 flex flex-row items-center mb-3">
                <Image
                  className="mr-2"
                  src="/svg/point.svg"
                  alt="Point"
                  width={15}
                  height={15}
                />
                JL.Jeruk, Jakarta Selatan
                <span className="text-gray-500 flex flex-row items-center ml-5">
                  <span>3842 sq ft</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
                  <span>4 Beds</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
                  <span>3 Baths</span>
                </span>
              </p>
              <div className="flex justify-center mt-10">
                <Image
                  src="/svg/break-line.svg"
                  alt="Break Line"
                  width={700}
                  height={25}
                />
              </div>
              <h4 className="text-white text-xl my-10 mb-2">
                Property Description
              </h4>
              <p className="text-gray-500">
                Discover the perfect blend of comfort and style in this inviting
                3-bedroom home. Nestled in a prime location, this property
                boasts a spacious living area, modern kitchen, and a serene
                backyard. The master bedroom features an ensuite bathroom,
                providing a private oasis. With contemporary finishes
                throughout, this home is move-in ready. Conveniently located
                near schools, parks, and shopping centers, it offers an ideal
                lifestyle for families. Dont miss the chance to make this
                delightful house your new home. Schedule a viewing today!
              </p>
              <div className="flex flex-row justify-center items-center mt-10">
                <div className="flex-1">
                  <p className="text-gray-500">Ground Floor</p>
                  <p className="text-white text-xl mt-5">
                    1500m<sup>2</sup>
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-500">First Floor</p>
                  <p className="text-white text-xl mt-5">
                    100m<sup>2</sup>
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-500">Second Floor</p>
                  <p className="text-white text-xl mt-5">
                    800m<sup>2</sup>
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-500">Construction Area</p>
                  <p className="text-white text-xl mt-5">
                    1100m<sup>2</sup>
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center mt-10">
                <div className="flex-1">
                  <p className="text-gray-500">Bedroom</p>
                  <p className="text-white text-xl mt-5">4</p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-500">Bathroom</p>
                  <p className="text-white text-xl mt-5">3</p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-500">Dining</p>
                  <p className="text-white text-xl mt-5">2</p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-500">Living Room</p>
                  <p className="text-white text-xl mt-5">2</p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-lg p-5 w-full mt-10">
              <h4 className="text-white text-xl mb-2">Location</h4>
              <p className="text-gray-500 flex flex-row items-center mb-3">
                <Image
                  className="mr-2"
                  src="/svg/point.svg"
                  alt="Point"
                  width={15}
                  height={15}
                />
                JL.Jeruk, Jakarta Selatan
                <span className="text-gray-500 flex flex-row items-center ml-5">
                  <span>3842 sq ft</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
                  <span>4 Beds</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
                  <span>3 Baths</span>
                </span>
              </p>
              <div className="flex justify-center mt-10">
                <Image
                  src="/svg/break-line.svg"
                  alt="Break Line"
                  width={700}
                  height={25}
                />
              </div>
              <iframe
                className="w-full h-72 rounded-lg mt-10"
                style={{ border: 0 }}
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=
    &q=Space+Needle,Seattle+WA"
              ></iframe>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-white text-2xl mb-10">Similar Listings</h1>
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
            </div>
          </div>
        </section>
        <section className="mt-24">
          <hr className="border-gray-800" />
          <p className="text-gray-500 my-10">
            (c) 2023 TerraX. all Right Reserved
          </p>
        </section>
      </article>
    </main>
  );
}
