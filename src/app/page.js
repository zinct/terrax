"use client";
import Image from "next/image";
import PrimaryNavbar from "@/core/components/navbar/PrimaryNavbar";
import useHomeViewModel from "@/features/home/viewModels/useHomeViewModel";
import Link from "next/link";

const Page = () => {
  return (
    <main className="relative">
      <div className="absolute z-0 top-96">
        <svg xmlns="http://www.w3.org/2000/svg" width="1365" height="1785" viewBox="0 0 1365 1785" fill="none">
          <g filter="url(#filter0_f_58_1103)">
            <path d="M444.333 862.685C697.293 746.314 670.57 981.129 656.158 1084.56L-43.4536 1074C-57.4074 936.891 7.93945 689.233 90.0648 701.312C300.481 732.26 217.925 966.841 444.333 862.685Z" fill="#007397" />
          </g>
          <defs>
            <filter id="filter0_f_58_1103" x="-745.34" y="0.88623" width="2110.12" height="1783.67" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="350" result="effect1_foregroundBlur_58_1103" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute z-0 bottom-16 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="1428" height="1473" viewBox="0 0 1428 1473" fill="none">
          <g filter="url(#filter0_f_58_1106)">
            <path d="M949.25 822.204C843.304 627.46 1125.7 715.165 1249.72 755.463L1137.6 1193.78C968.515 1161.23 675.945 1045.27 702.317 997.089C769.884 873.637 1044.08 996.506 949.25 822.204Z" fill="#007397" />
          </g>
          <defs>
            <filter id="filter0_f_58_1106" x="0.648438" y="0.520996" width="1949.07" height="1893.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="350" result="effect1_foregroundBlur_58_1106" />
            </filter>
          </defs>
        </svg>
      </div>
      <article className="container mx-auto">
        <PrimaryNavbar />
        <Image src="/svg/pattern.svg" width={800} height={700} alt="Pattern" className="absolute right-[15rem]" />
        <section className="flex flex-row items-center justify-between relative mt-14">
          <div className="flex-1">
            <h1 className="text-white font-bold text-7xl">
              <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">Secure and Easy</span> Property Transactions
              <div className="relative h-20">
                <Image src="/svg/line.svg" width={400} height={100} alt="Line" className="absolute top-0 -right-5" />
              </div>
            </h1>
            <p className="text-gray-500 text-lg">With blockchain technology, now you can do property transactions effortlessly and completed within 7 days or less.</p>
            <div className="mt-10">
              <button className="bg-cyan-400 px-5 py-3 rounded-lg mr-10">Explore</button>
              <button className="text-white relative">
                Go To Market <Image src="/svg/arrow-btn.svg" width={50} height={10} alt="Line" className="absolute top-2 -right-16" />
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <Image src="/svg/card-promotion.svg" width={600} height={500} alt="Card Promotion" className="z-10" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-20">
              <div>
                <h2 className="text-white font-bold text-4xl">
                  56K<span className="text-cyan-300">+</span>
                </h2>
                <p className="text-white">Listings</p>
              </div>
              <div>
                <h2 className="text-white font-bold text-4xl">
                  18K<span className="text-cyan-300">+</span>
                </h2>
                <p className="text-white">Property Sold</p>
              </div>
              <div>
                <h2 className="text-white font-bold text-4xl">
                  10K<span className="text-cyan-300">+</span>
                </h2>
                <p className="text-white">Customer Satisfied</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center space-x-6">
              <Image src="/svg/lock.svg" width={25} height={25} alt="Lock Icon" />
              <h2 className="text-white text-3xl">Blockchain Security</h2>
              <p className="text-gray-500 text-lg">
                Our platform has a strict security <br />
                system that is safe from name theft.
              </p>
            </div>
            <div className="flex-1">
              <Image className="m-auto" src="/svg/star-light.svg" width={300} height={150} alt="Start Light" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex-1">
              <Image className="m-auto " src="/svg/star-light.svg" width={300} height={150} alt="Start Light" />
            </div>
            <div className="flex flex-row items-center justify-center space-x-6">
              <Image src="/svg/lock.svg" width={25} height={25} alt="Lock Icon" />
              <h2 className="text-white text-3xl">E-Certificate</h2>
              <p className="text-gray-500 text-lg">
                We ensures ease and trust through e-certificates,
                <br /> making transactions straightforward and worry-free
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-row items-center justify-between my-28">
            <h2 className="text-white font-bold text-5xl">Near You</h2>
            <button className="bg-cyan-400 px-5 py-3 rounded-lg flex flex-row items-center">
              Explore <Image className="ml-5" src="/svg/arrow-btn-dark.svg" width={50} height={10} alt="Line" />{" "}
            </button>
          </div>
        </section>{" "}
        <section>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="bg-zinc-900 rounded-lg p-5">
              <div className="relative h-[20rem] w-full">
                <Image className="rounded-lg object-cover" src="/images/img1.png" alt="Image" fill />
                <span className="absolute top-3 left-3 bg-orange-400 py-1 px-3 rounded-lg text-white">Used Home</span>
              </div>
              <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
              <p className="text-gray-500 flex flex-row mb-3">
                <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
                JL.Jeruk, Jakarta Selatan
              </p>
              <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
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
              <div className="relative h-[20rem] w-full">
                <Image className="rounded-lg object-cover" src="/images/img1.png" alt="Image" fill />
                <span className="absolute top-3 left-3 bg-orange-400 py-1 px-3 rounded-lg text-white">Used Home</span>
              </div>
              <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
              <p className="text-gray-500 flex flex-row mb-3">
                <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
                JL.Jeruk, Jakarta Selatan
              </p>
              <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
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
              <div className="relative h-[20rem] w-full">
                <Image className="rounded-lg object-cover" src="/images/img1.png" alt="Image" fill />
                <span className="absolute top-3 left-3 bg-orange-400 py-1 px-3 rounded-lg text-white">Used Home</span>
              </div>
              <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
              <p className="text-gray-500 flex flex-row mb-3">
                <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
                JL.Jeruk, Jakarta Selatan
              </p>
              <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
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
              <div className="relative h-[20rem] w-full">
                <Image className="rounded-lg object-cover" src="/images/img1.png" alt="Image" fill />
                <span className="absolute top-3 left-3 bg-orange-400 py-1 px-3 rounded-lg text-white">Used Home</span>
              </div>
              <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
              <p className="text-gray-500 flex flex-row mb-3">
                <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
                JL.Jeruk, Jakarta Selatan
              </p>
              <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
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
              <div className="relative h-[20rem] w-full">
                <Image className="rounded-lg object-cover" src="/images/img1.png" alt="Image" fill />
                <span className="absolute top-3 left-3 bg-orange-400 py-1 px-3 rounded-lg text-white">Used Home</span>
              </div>
              <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
              <p className="text-gray-500 flex flex-row mb-3">
                <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
                JL.Jeruk, Jakarta Selatan
              </p>
              <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
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
              <div className="relative h-[20rem] w-full">
                <Image className="rounded-lg object-cover" src="/images/img1.png" alt="Image" fill />
                <span className="absolute top-3 left-3 bg-orange-400 py-1 px-3 rounded-lg text-white">Used Home</span>
              </div>
              <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
              <p className="text-gray-500 flex flex-row mb-3">
                <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
                JL.Jeruk, Jakarta Selatan
              </p>
              <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
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
        <section className="flex flex-row items-center justify-between relative my-28">
          <div className="flex-1">
            <h1 className="text-white font-bold text-7xl">
              Easy Process,
              <br />
              Easy Deal
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">Easy Money</span>
              <div className="relative h-20">
                <Image src="/svg/line.svg" width={400} height={100} alt="Line" className="absolute -top-3 left-26" />
              </div>
            </h1>
            <p className="text-gray-500 text-lg">Sell your property and land with an easy and fast process.</p>
            <div className="mt-10">
              <button className="bg-cyan-400 px-5 py-3 rounded-lg mr-10">Sell Property Now</button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <Image src="/svg/easy-setup.svg" width={600} height={500} alt="Card Promotion" className="z-10" />
            </div>
          </div>
        </section>
        <section>
          <hr className="border-gray-800" />
          <p className="text-gray-500 my-10">(c) 2023 TerraX. all Right Reserved</p>
        </section>
      </article>
    </main>
  );
};

export default Page;