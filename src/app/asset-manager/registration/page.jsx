"use client";

import PrimaryNavbar from "@/core/components/navbar/PrimaryNavbar";
import useRegistrationViewModel from "@/features/assetManager/viewModels/useRegistrationViewModel";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PrimaryMaps from "@/core/components/maps/PrimaryMaps";
import { ScaleLoader } from "react-spinners";
import PrimaryLoading from "@/core/components/loading/PrimaryLoading";
import PropertyRegistrationSuccessAlert from "@/core/components/alert/PropertyRegistrationSuccessAlert";
import AuthContext from "@/core/contexts/AuthContext";

const stepDetail = [
  {
    title: "Type of Listing",
    desc: "Please select one of your listing",
  },
  {
    title: "Property/Land Details",
    desc: "Fill in the form to complete registration.",
  },
  {
    title: "Upload Certificate",
    desc: "Upload your Property Certificate to verify your identity. Don’t worry your data is secure.",
  },
];

const Page = () => {
  const viewModel = useRegistrationViewModel();
  const authContext = useContext(AuthContext);
  const router = useRouter();
  const [notAuthenticated, setIsNotAuthenticated] = useState(false);

  const files2 = viewModel.acceptedFiles2.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  useEffect(() => {
    if (authContext.isLoading == false) {
      if (!authContext.user) {
        setIsNotAuthenticated(true);
      }
    }
  }, [authContext.isLoading]);

  return authContext.isLoading ? (
    <div className="mt-[20rem]">
      <PrimaryLoading />
    </div>
  ) : !authContext.user ? (
    <div className="mt-[20rem]">
      <PrimaryLoading />
    </div>
  ) : viewModel.isSuccess ? (
    <PropertyRegistrationSuccessAlert />
  ) : (
    <>
      <main className="relative">
        <div className="relative z-0">
          <div className="absolute -top-10 right-0 ">
            <svg
              className="h-screen"
              xmlns="http://www.w3.org/2000/svg"
              width="1213"
              height="926"
              viewBox="0 0 1213 926"
              fill="none"
            >
              <g filter="url(#filter0_f_62_3515)">
                <path
                  d="M1190.33 3.68472C1443.29 -112.686 1416.57 122.129 1402.16 225.56L702.546 214.996C688.593 77.8905 753.94 -169.767 836.065 -157.688C1046.48 -126.74 963.925 107.841 1190.33 3.68472Z"
                  fill="#FF8660"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_62_3515"
                  x="0.660034"
                  y="-858.114"
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
                    result="effect1_foregroundBlur_62_3515"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <article className="container mx-auto relative z-10">
          <PrimaryNavbar />
          <div className="flex flex-col mt-[5rem]">
            <div className="w-full bg-zinc-900 rounded-lg">
              <div className="flex">
                <button
                  className={`flex-1 text-white rounded-tl-lg p-6 ${
                    viewModel.tab >= 1 && "font-bold bg-orange-400"
                  }`}
                >
                  <span
                    className={`bg-white ${
                      viewModel.tab >= 1 ? "text-orange-400" : "text-zinc-800"
                    } p-2 rounded-full mr-3`}
                  >
                    01
                  </span>
                  Type of Property
                </button>
                <button
                  className={`flex-1 text-white p-6 ${
                    viewModel.tab >= 2 && "font-bold bg-orange-400"
                  }`}
                >
                  <span
                    className={`bg-white ${
                      viewModel.tab >= 2 ? "text-orange-400" : "text-zinc-800"
                    } p-2 rounded-full mr-3`}
                  >
                    02
                  </span>
                  Property/Land Details
                </button>
                <button
                  className={`flex-1 text-white rounded-tr-lg p-6 ${
                    viewModel.tab >= 3 && "font-bold bg-orange-400"
                  }`}
                >
                  <span
                    className={`bg-white ${
                      viewModel.tab >= 3 ? "text-orange-400" : "text-zinc-800"
                    } p-2 rounded-full mr-3`}
                  >
                    03
                  </span>
                  Upload Certificate Of Ownership
                </button>
              </div>
              <div className="flex-none text-center pt-[6rem] p-[2rem] space-y-3">
                <p className="text-cyan-400 text-2xl font-bold">
                  Step {viewModel.tab + 1}
                </p>
                <p className="text-white text-4xl font-bold">
                  {stepDetail[viewModel.tab].title}
                </p>
                <p className="text-gray-500">
                  {stepDetail[viewModel.tab].desc}
                </p>
              </div>
              {/* STEP 1 */}
              <div
                className={`flex px-[8rem] mb-[8rem] space-x-10 ${
                  viewModel.tab === 0 ? "" : "hidden"
                }`}
              >
                <div className="flex flex-row space-x-5 mt-5 w-full">
                  <button
                    onClick={() => {
                      viewModel.setPropertyCategory("new");
                    }}
                    className={`flex-1 border-2 ${
                      viewModel.propertyCategory === "new"
                        ? "border-cyan-400"
                        : "border-zinc-800"
                    } px-5 py-3 rounded-lg text-white`}
                  >
                    New Property
                  </button>
                  <button
                    onClick={() => {
                      viewModel.setPropertyCategory("used");
                    }}
                    className={`flex-1 border-2 ${
                      viewModel.propertyCategory === "used"
                        ? "border-cyan-400"
                        : "border-zinc-800"
                    } px-5 py-3 rounded-lg text-white`}
                  >
                    Used Property
                  </button>
                  <button
                    onClick={() => {
                      viewModel.setPropertyCategory("land");
                    }}
                    className={`flex-1 border-2 ${
                      viewModel.propertyCategory === "land"
                        ? "border-cyan-400"
                        : "border-zinc-800"
                    } px-5 py-3 rounded-lg text-white`}
                  >
                    Land
                  </button>
                </div>
              </div>
              {/* STEP 2 */}
              <div
                className={`flex flex-col ${
                  viewModel.tab === 1 ? "" : "hidden"
                }`}
              >
                <div
                  className={`flex px-10 mb-10 space-x-10 ${
                    viewModel.tab === 1 ? "" : "hidden"
                  }`}
                >
                  <div className="flex-1 space-y-5">
                    <div>
                      <label className="text-white mb-2 block">
                        Property Name
                      </label>
                      <input
                        className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                        type="text"
                        placeholder="Type Your Property name Here"
                        name="name"
                        onChange={viewModel.formik.handleChange}
                      ></input>
                    </div>
                    <div>
                      <label className="text-white mb-2 block">
                        Property Description
                      </label>
                      <textarea
                        className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                        placeholder="Type Your Description Here"
                        name="description"
                        onChange={viewModel.formik.handleChange}
                      ></textarea>
                    </div>
                    <div>
                      <label className="text-white mb-2 block">
                        Property Price
                      </label>
                      <input
                        className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                        type="number"
                        placeholder="0 ICP"
                        name="price"
                        onChange={viewModel.formik.handleChange}
                      ></input>
                    </div>
                    <button
                      {...viewModel.getRootProps({
                        className: "min-h-36 w-full",
                      })}
                    >
                      <label className="text-white mb-2 block text-start">
                        Property Images
                      </label>
                      <div className="dropzone flex justify-center py-3 px-5 w-full h-full rounded-lg border-[#9D9D9F] border-2 border-dashed basis-1/3">
                        {viewModel.propertyBase64.length > 0 ? (
                          <div></div>
                        ) : (
                          <p className="text-zinc-500 text-left flex items-center justify-center gap-x-3">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M16.2844 2.44238H8.21552L6.21292 6.06992C5.81681 6.10332 5.42298 6.13746 5.03155 6.17126C3.3578 6.3158 1.97999 7.60537 1.73477 9.26736C1.51261 10.773 1.31247 12.3236 1.31247 13.9073C1.31247 15.491 1.51261 17.0417 1.73477 18.5473C1.97999 20.2093 3.3578 21.4989 5.03155 21.6434C7.43298 21.8509 9.83764 22.0576 12.25 22.0576C14.6623 22.0576 17.067 21.8509 19.4684 21.6434C21.1421 21.4989 22.5199 20.2093 22.7652 18.5473C22.9873 17.0417 23.1875 15.491 23.1875 13.9073C23.1875 12.3236 22.9873 10.773 22.7652 9.26736C22.5199 7.60537 21.1421 6.3158 19.4684 6.17126C19.0746 6.13724 18.6808 6.10313 18.287 6.06992L16.2844 2.44238Z"
                                  stroke="#62D9FF"
                                  strokeWidth="2.62497"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12 16.9755C14.1302 16.9755 15.8571 15.2486 15.8571 13.1184C15.8571 10.9881 14.1302 9.26123 12 9.26123C9.86976 9.26123 8.14286 10.9881 8.14286 13.1184C8.14286 15.2486 9.86976 16.9755 12 16.9755Z"
                                  stroke="#62D9FF"
                                  strokeWidth="2.62497"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </p>
                        )}
                        <div className="flex flex-col gap-3 py-10">
                          {viewModel.propertyBase64.length > 0 ? (
                            viewModel.propertyBase64.map((row, index) => {
                              return (
                                <Image
                                  className="rounded"
                                  width={80}
                                  height={80}
                                  objectFit="cover"
                                  key={row.key}
                                  src={row}
                                  alt="Image"
                                />
                              );
                            })
                          ) : (
                            <span className="ms-2">Upload your photo here</span>
                          )}
                        </div>
                        <input {...viewModel.getInputProps()} />
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-1 flex-col gap-y-5">
                    <div className="flex gap-x-5">
                      <div className="flex-1">
                        <label className="text-white mb-2 block">
                          Ground Floor
                        </label>
                        <input
                          className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                          type="number"
                          placeholder="0 m²"
                          name="groundFloor"
                          onChange={viewModel.formik.handleChange}
                        ></input>
                      </div>
                      <div className="flex-1">
                        <label className="text-white mb-2 block">
                          Construction Area
                        </label>
                        <input
                          className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                          type="number"
                          placeholder="0 m²"
                          name="construtionArea"
                          onChange={viewModel.formik.handleChange}
                        ></input>
                      </div>
                    </div>
                    <div className="flex gap-x-5">
                      <div className="flex-1">
                        <label className="text-white mb-2 block">
                          First Floor
                        </label>
                        <input
                          className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                          type="number"
                          placeholder="0 m²"
                          name="firstFloor"
                          onChange={viewModel.formik.handleChange}
                        ></input>
                      </div>
                      <div className="flex-1">
                        <label className="text-white mb-2 block">
                          Second Floor
                        </label>
                        <input
                          className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                          type="number"
                          name="secondFloor"
                          onChange={viewModel.formik.handleChange}
                          placeholder="0 m²"
                        ></input>
                      </div>
                    </div>
                    <div className="flex gap-x-5">
                      <div className="flex-1">
                        <label className="text-white mb-2 block">Bedroom</label>
                        <input
                          className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                          type="number"
                          placeholder="0"
                          name="bedroom"
                          onChange={viewModel.formik.handleChange}
                        ></input>
                      </div>
                      <div className="flex-1">
                        <label className="text-white mb-2 block">
                          Bathroom
                        </label>
                        <input
                          className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                          type="number"
                          placeholder="0"
                          name="bathroom"
                          onChange={viewModel.formik.handleChange}
                        ></input>
                      </div>
                    </div>
                    <div className="flex gap-x-5">
                      <div className="flex-1">
                        <label className="text-white mb-2 block">
                          Dining Room
                        </label>
                        <input
                          className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                          type="number"
                          placeholder="0"
                          name="dining"
                          onChange={viewModel.formik.handleChange}
                        ></input>
                      </div>
                      <div className="flex-1">
                        <label className="text-white mb-2 block">
                          Living Room
                        </label>
                        <input
                          className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                          type="number"
                          placeholder="0"
                          name="livingRoom"
                          onChange={viewModel.formik.handleChange}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-10 rounded mb-10 w-full">
                  <label
                    className="text-white mb-2 block"
                    onClick={() => viewModel.setIsMaps(true)}
                  >
                    Property Location
                  </label>

                  <PrimaryMaps
                    lat={viewModel.viewPort.lat}
                    lng={viewModel.viewPort.lng}
                    onChangeCoordinate={viewModel.handleCoordinate}
                  />
                </div>
                <div className="px-10 rounded mb-10 w-full">
                  <label className="text-white mb-2 block">
                    Property Address
                  </label>
                  <textarea
                    className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                    rows={4}
                    placeholder="Type Your Address Here"
                    name="address"
                    onChange={viewModel.formik.handleChange}
                  ></textarea>
                </div>
              </div>
              {/* STEP 3 */}
              <div
                className={`px-10 mb-10 space-x-10 ${
                  viewModel.tab === 2 ? "" : "hidden"
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex flex-row items-center justify-center mb-10">
                    <div>
                      <Image
                        className="mr-2"
                        src="/images/certificate-1.png"
                        alt="certificate"
                        width={180}
                        height={180}
                      />
                    </div>
                    <div>
                      <Image
                        className="mr-2"
                        src="/images/certificate-2.png"
                        alt="certificate"
                        width={180}
                        height={180}
                      />
                    </div>
                    <div>
                      <Image
                        className="mr-2"
                        src="/images/certificate-3.png"
                        alt="certificate"
                        width={180}
                        height={180}
                      />
                    </div>
                  </div>
                  <button
                    {...viewModel.getRootProps2({
                      className: "h-full w-full",
                    })}
                  >
                    <div className="py-3 w-full rounded-lg border-[#9D9D9F] border-2 border-dashed space-y-5 flex flex-col justify-center items-center">
                      {files2.length > 0 ? (
                        <div />
                      ) : (
                        <div>
                          <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="80"
                              height="80"
                              rx="40"
                              fill="#62D9FF"
                              fillOpacity="0.1"
                            />
                            <path
                              d="M45.2694 27.1899H34.7305L32.1148 31.928C31.5975 31.9716 31.0831 32.0162 30.5718 32.0603C28.3857 32.2491 26.5861 33.9334 26.2658 36.1042C25.9756 38.0708 25.7142 40.0961 25.7142 42.1646C25.7142 44.2331 25.9756 46.2584 26.2658 48.225C26.5861 50.3957 28.3857 52.0801 30.5718 52.2689C33.7084 52.5398 36.8492 52.8098 39.9999 52.8098C43.1507 52.8098 46.2915 52.5398 49.4281 52.2689C51.6142 52.0801 53.4138 50.3957 53.7341 48.225C54.0242 46.2584 54.2857 44.2331 54.2857 42.1646C54.2857 40.0961 54.0242 38.0708 53.7341 36.1042C53.4138 33.9334 51.6142 32.2491 49.4281 32.0603C48.9138 32.0159 48.3995 31.9713 47.8851 31.9279L45.2694 27.1899Z"
                              stroke="#62D9FF"
                              strokeWidth="3.42853"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M40 46.6339C42.8404 46.6339 45.1429 44.3313 45.1429 41.491C45.1429 38.6507 42.8404 36.3481 40 36.3481C37.1597 36.3481 34.8572 38.6507 34.8572 41.491C34.8572 44.3313 37.1597 46.6339 40 46.6339Z"
                              stroke="#62D9FF"
                              strokeWidth="3.42853"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                      <p className="text-zinc-500 text-center">
                        {files2.length > 0 ? files2 : "Upload your e-KTP here"}
                      </p>

                      <input {...viewModel.getInputProps2()} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between my-10">
              <button
                onClick={() => {
                  if (viewModel.tab > 0) {
                    return viewModel.setTab(viewModel.tab - 1);
                  }

                  router.push("/asset-manager");
                }}
                className="px-5 py-3 rounded-lg flex flex-row items-center font-bold text-white"
              >
                <span className="bg-white rounded-full p-0.5 mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M13.293 18.207L7.58603 12.5L13.293 6.79297L14.707 8.20697L10.414 12.5L14.707 16.793L13.293 18.207Z"
                      fill="#2E2E48"
                    />
                  </svg>
                </span>
                {viewModel.tab === 0 ? "Back to Asset Manager" : "Previous"}
              </button>
              <button
                onClick={async () => {
                  if (viewModel.tab === 2) {
                    viewModel.formik.submitForm();
                    return;
                  }
                  viewModel.setTab(viewModel.tab + 1);
                }}
                className="bg-gradient-to-r from-cyan-400 to-orange-400 px-5 py-3 rounded-lg flex flex-row items-center"
              >
                {viewModel.tab === 2 ? (
                  viewModel.formik.isSubmitting ? (
                    <div className="px-[2.8rem]">
                      <ScaleLoader height={20} color="white" />
                    </div>
                  ) : (
                    <>
                      Submit
                      <Image
                        className="ml-5"
                        src="/svg/arrow-btn-dark.svg"
                        width={50}
                        height={10}
                        alt="Line"
                      />{" "}
                    </>
                  )
                ) : (
                  <>
                    Next Step
                    <Image
                      className="ml-5"
                      src="/svg/arrow-btn-dark.svg"
                      width={50}
                      height={10}
                      alt="Line"
                    />{" "}
                  </>
                )}
              </button>
            </div>
          </div>
        </article>
        <div className="fixed z-0 bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1352"
            height="990"
            viewBox="0 0 1352 990"
            fill="none"
          >
            <g filter="url(#filter0_f_62_3516)">
              <path
                d="M431.333 862.685C684.293 746.314 657.57 981.129 643.158 1084.56L-56.4535 1074C-70.4072 936.891 -5.06037 689.233 77.065 701.312C287.482 732.26 204.925 966.841 431.333 862.685Z"
                fill="#007397"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_62_3516"
                x="-758.34"
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
                  result="effect1_foregroundBlur_62_3516"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </main>
    </>
  );
};

export default Page;
