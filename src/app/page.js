"use client";

import Image from "next/image";
import useHomeViewModel from "@/features/home/viewModels/useHomeViewModel";

const Page = () => {
  const viewModel = useHomeViewModel();

  return (
    <main className="container mx-auto">
      <header className="flex flex-row items-center justify-between my-5">
        <div>
          <Image src="/svg/terrax.svg" width={117} height={42} alt="TerraX Logo" />
        </div>
        <nav>
          <ul className="flex flex-row items-center justify-center space-x-16 text-white">
            <li className="font-bold border-b-white border-b-2">Home</li>
            <li className="text-gray-300">Buy</li>
            <li className="text-gray-300">Sell</li>
            <li className="text-gray-300">Asset Manager</li>
          </ul>
        </nav>
        <div>
          <button className="w-24 h-12 text-white font-bold rounded-lg bg-gradient-to-r from-cyan-400 to-orange-400 p-1">
            <div className="h-full rounded-lg py-2" style={{ backgroundColor: "#000a14" }} onClick={viewModel.handleConnectAccount}>
              Sign In
            </div>
          </button>
        </div>
      </header>
      <section className="flex flex-row items-center justify-between relative">
        <Image src="/svg/pattern.svg" width={800} height={700} alt="Pattern" className="absolute -top-10 -right-10 z-0" />
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
            Explore <Image className="ml-5" src="/svg/arrow-btn-dark.svg" width={50} height={10} alt="Line" />
          </button>
        </div>
      </section>
      <section>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="bg-gray-900 shadow-md shadow-black rounded-lg p-5">
            <div className="relative h-56 w-full">
              <Image className="rounded-lg" src="/images/img1.png" alt="Image" layout="fill" />
            </div>
            <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
            <p className="text-gray-500 flex flex-row mb-3">
              <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
              JL.Jeruk, Jakarta Selatan
            </p>
            <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
            <p className="text-gray-500 flex flex-row items-center my-3">
              <span>3842 sq ft</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>4 Beds</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>3 Baths</span>
            </p>
            <p className="text-cyan-400 text-2xl">30.20 ETH</p>
          </div>
          <div className="bg-gray-900 shadow-md shadow-black rounded-lg p-5">
            <div className="relative h-56 w-full">
              <Image className="rounded-lg" src="/images/img1.png" alt="Image" layout="fill" />
            </div>
            <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
            <p className="text-gray-500 flex flex-row mb-3">
              <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
              JL.Jeruk, Jakarta Selatan
            </p>
            <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
            <p className="text-gray-500 flex flex-row items-center my-3">
              <span>3842 sq ft</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>4 Beds</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>3 Baths</span>
            </p>
            <p className="text-cyan-400 text-2xl">30.20 ETH</p>
          </div>
          <div className="bg-gray-900 shadow-md shadow-black rounded-lg p-5">
            <div className="relative h-56 w-full">
              <Image className="rounded-lg" src="/images/img1.png" alt="Image" layout="fill" />
            </div>
            <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
            <p className="text-gray-500 flex flex-row mb-3">
              <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
              JL.Jeruk, Jakarta Selatan
            </p>
            <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
            <p className="text-gray-500 flex flex-row items-center my-3">
              <span>3842 sq ft</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>4 Beds</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>3 Baths</span>
            </p>
            <p className="text-cyan-400 text-2xl">30.20 ETH</p>
          </div>
          <div className="bg-gray-900 shadow-md shadow-black rounded-lg p-5">
            <div className="relative h-56 w-full">
              <Image className="rounded-lg" src="/images/img1.png" alt="Image" layout="fill" />
            </div>
            <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
            <p className="text-gray-500 flex flex-row mb-3">
              <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
              JL.Jeruk, Jakarta Selatan
            </p>
            <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
            <p className="text-gray-500 flex flex-row items-center my-3">
              <span>3842 sq ft</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>4 Beds</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>3 Baths</span>
            </p>
            <p className="text-cyan-400 text-2xl">30.20 ETH</p>
          </div>
          <div className="bg-gray-900 shadow-md shadow-black rounded-lg p-5">
            <div className="relative h-56 w-full">
              <Image className="rounded-lg" src="/images/img1.png" alt="Image" layout="fill" />
            </div>
            <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
            <p className="text-gray-500 flex flex-row mb-3">
              <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
              JL.Jeruk, Jakarta Selatan
            </p>
            <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
            <p className="text-gray-500 flex flex-row items-center my-3">
              <span>3842 sq ft</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>4 Beds</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>3 Baths</span>
            </p>
            <p className="text-cyan-400 text-2xl">30.20 ETH</p>
          </div>
          <div className="bg-gray-900 shadow-md shadow-black rounded-lg p-5">
            <div className="relative h-56 w-full">
              <Image className="rounded-lg" src="/images/img1.png" alt="Image" layout="fill" />
            </div>
            <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
            <p className="text-gray-500 flex flex-row mb-3">
              <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
              JL.Jeruk, Jakarta Selatan
            </p>
            <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
            <p className="text-gray-500 flex flex-row items-center my-3">
              <span>3842 sq ft</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>4 Beds</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>3 Baths</span>
            </p>
            <p className="text-cyan-400 text-2xl">30.20 ETH</p>
          </div>
          <div className="bg-gray-900 shadow-md shadow-black rounded-lg p-5">
            <div className="relative h-56 w-full">
              <Image className="rounded-lg" src="/images/img1.png" alt="Image" layout="fill" />
            </div>
            <h3 className="text-white text-2xl mt-3 mb-2">Rumah Full-Furnish di Jaksel</h3>
            <p className="text-gray-500 flex flex-row mb-3">
              <Image className="mr-2" src="/svg/point.svg" alt="Point" width={15} height={15} />
              JL.Jeruk, Jakarta Selatan
            </p>
            <Image src="/svg/break-line.svg" alt="Break Line" width={500} height={25} />
            <p className="text-gray-500 flex flex-row items-center my-3">
              <span>3842 sq ft</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
              <span>4 Beds</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
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
      <hr className="border-gray-800" />
      <p className="text-gray-500 my-10">(c) 2023 TerraX. all Right Reserved</p>
    </main>
  );
};

export default Page;
