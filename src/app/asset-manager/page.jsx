"use client";

import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import PrimaryLoading from "@/core/components/loading/PrimaryLoading";
import PrimaryNavbar from "@/core/components/navbar/PrimaryNavbar";
import useAssetManagerViewModel from "@/features/assetManager/viewModels/useAssetManagerViewModel";

export default function AssetManager({ children }) {
  const viewModel = useAssetManagerViewModel();
  const pathname = usePathname();
  const router = useRouter();

  function getAllProperty() {
    return viewModel.isLoading ? (
      <PrimaryLoading />
    ) : viewModel.properties.length > 0 ? (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {viewModel.properties.map((row) => (
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
                {row.category.hasOwnProperty("used") ? "Used Home" : "New Home"}
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
      <div className="flex flex-col items-center justify-center gap-y-5 my-[10rem]">
        <img className="w-44" src="images/not-found.png" alt="" />
        <div className="flex flex-col items-center">
          <p className="font-bold text-[24px] text-[#F3F3F3]">
            Your property is empty
          </p>
          <p className="font-bold text-[16px] text-[#6F6F73]">
            Please register your property to our system
          </p>
        </div>
      </div>
    );
  }

  function getAllCertificate() {
    if (!viewModel.notAuthenticated && viewModel.properties.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center gap-y-5 my-[10rem]">
          <img className="w-44" src="images/not-found.png" alt="" />
          <div className="flex flex-col items-center">
            <p className="font-bold text-[24px] text-[#F3F3F3]">
              Your property is empty
            </p>
            <p className="font-bold text-[16px] text-[#6F6F73]">
              Please register your property to our system
            </p>
          </div>
        </div>
      );
    }

    return viewModel.isLoading ? (
      <PrimaryLoading />
    ) : (
      !viewModel.notAuthenticated &&
        viewModel.properties.map((row) => (
          <div key={row.id} className="bg-zinc-900 rounded-lg p-5">
            <div className="md:flex flex-row items-center">
              <div className="relative w-full h-[50vw] md:h-28 md:w-40 mr-5">
                <img
                  className="rounded-lg"
                  src="/images/e-certificate.png"
                  alt="Image"
                  fill
                />
              </div>
              <div className="flex items-center justify-center md:flex-1">
                <div className="flex-1">
                  <h3 className="text-white text-xl lg:text-2xl mt-3 mb-2">
                    {row.name}
                  </h3>
                  <p className="text-gray-500 flex flex-row mb-3">
                    ID: {row.id}
                  </p>
                  <p className="text-gray-500 flex flex-row mb-3">
                    <img
                      className="mr-2"
                      src="/svg/point.svg"
                      alt="Point"
                      width={15}
                      height={15}
                    />
                    {row.address}
                  </p>
                </div>
                <a
                  href={`/e-certificate/${row.id}`}
                  target="_blank"
                  // onClick={() => viewModel.handleDownloadPDF(row)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 14.5L11.2929 15.2071L12 15.9142L12.7071 15.2071L12 14.5ZM13 5.5C13 4.94772 12.5523 4.5 12 4.5C11.4477 4.5 11 4.94771 11 5.5L13 5.5ZM6.29289 10.2071L11.2929 15.2071L12.7071 13.7929L7.70711 8.79289L6.29289 10.2071ZM12.7071 15.2071L17.7071 10.2071L16.2929 8.79289L11.2929 13.7929L12.7071 15.2071ZM13 14.5L13 5.5L11 5.5L11 14.5L13 14.5Z"
                      fill="#62D9FF"
                    />
                    <path
                      d="M5 16.5L5 17.5C5 18.6046 5.89543 19.5 7 19.5L17 19.5C18.1046 19.5 19 18.6046 19 17.5V16.5"
                      stroke="#62D9FF"
                      stroke-width="2"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))
    );
  }

  return (
    <>
      <main className="relative z-10">
        <article className="container mx-auto">
          <PrimaryNavbar
            isSignModalShow={viewModel.notAuthenticated}
            onClose={() => {
              router.push("/");
            }}
          />

          <div className="my-[5rem]">
            <h2 className="text-[40px] font-bold text-[#F3F3F3] ">
              Asset Manager
            </h2>
            <p className="text-gray-500 lg:text-lg">
              Ready to elevate the security of your land certificates?{" "}
              <Link
                href="/asset-manager/registration"
                className="text-cyan-500"
              >
                Register Now
              </Link>
            </p>
          </div>

          <section className="flex flex-row items-center">
            <button
              onClick={() => {
                viewModel.setTab(0);
              }}
              className={`flex-1 p-5 text-center ${
                viewModel.tab === 0
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-500"
              }`}
            >
              ALL PROPERTY
            </button>
            <button
              onClick={() => {
                viewModel.setTab(1);
              }}
              className={`flex-1 p-5 text-center ${
                viewModel.tab === 1
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-500"
              }`}
            >
              E-CERTIFICATES
            </button>
          </section>
          <section className="my-5 space-y-5">
            {viewModel.tab === 0 ? getAllProperty() : getAllCertificate()}
          </section>
          <section>
            <hr className="border-gray-800" />
            <p className="text-gray-500 my-10">
              (c) 2023 TerraX. all Right Reserved
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
