import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
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
      <div className="absolute z-0 -bottom-10 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1258"
          height="1485"
          viewBox="0 0 1258 1485"
          fill="none"
        >
          <g filter="url(#filter0_f_118_587)">
            <path
              d="M1190.33 862.685C1443.29 746.314 1416.57 981.129 1402.16 1084.56L702.546 1074C688.593 936.891 753.94 689.233 836.065 701.312C1046.48 732.26 963.925 966.841 1190.33 862.685Z"
              fill="#007397"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_118_587"
              x="0.660034"
              y="0.88623"
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
                result="effect1_foregroundBlur_118_587"
              />
            </filter>
          </defs>
        </svg>
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
          <div>
            <button className="w-24 h-12 text-white font-bold rounded-lg bg-gradient-to-r from-cyan-400 to-orange-400 p-1">
              <div
                className="h-full rounded-lg py-2"
                style={{ backgroundColor: "#000a14" }}
              >
                Sign In
              </div>
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
              <button className="bg-cyan-400 hover:bg-cyan-500 px-5 py-3 rounded-lg flex flex-row items-center justify-center w-full">
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
                      width={72}
                      height={72}
                      src="/images/user.png"
                      alt="Image"
                    />
                    <div className="ml-5">
                      <p className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent text-2xl">
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
                      width={72}
                      height={72}
                      src="/images/no-user.png"
                      alt="Image"
                    />
                    <div className="ml-5">
                      <p className="text-white text-2xl">Andi Kurniadi</p>
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
                lifestyle for families. Don't miss the chance to make this
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
