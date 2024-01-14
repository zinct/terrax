/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import useECertificateViewModel from "@/features/certificate/viewModels/useECertificateViewModel";
import PrimaryLoading from "@/core/components/loading/PrimaryLoading";
import { nanoToSecondTimestampto } from "@/core/utils/datetimeUtils";
import AuthContext from "@/core/contexts/AuthContext";
import moment from "moment";
import { useParams, useRouter } from "next/navigation";

const CertificateGenerateView = () => {
  const params = useParams();
  const viewModel = useECertificateViewModel();
  const { authClient } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (authClient) {
      viewModel.validateCertificate(params.id);
    }
  }, [authClient]);

  useEffect(() => {
    if (viewModel.isError) {
      router.push("/");
    }
  }, [viewModel.isError]);

  return viewModel.isLoading || viewModel.isError ? (
    <div className="mt-[20rem]">
      <PrimaryLoading />
    </div>
  ) : (
    <div
      ref={viewModel.pdfRef}
      className="bg-gradient-to-bl from-[#00B3BE] w-full via-[#F3F3F3] to-[#FF8660] px-[10rem] py-[5rem]"
      style={{ height: "100vh" }}
    >
      <div className="rounded-xl px-20 py-10 w-full text-[#2A2A2E] bg-white flex flex-col justify-center items-center">
        <img className="w-[195px] mb-5" src="/images/pdf/logo.png" alt="" />
        <h2 className="text-[30px] text-center font-bold text-[#2A2A2E] mb-20">
          E-CERTIFICATE <br /> OF PROPERTY OWNERSHIP
        </h2>

        <div className="flex flex-col w-full items-start gap-y-5">
          <div>
            <h3 className="font-bold text-[20px]">This is to certify that</h3>
            <p className="text-[20px]">
              Owner’s Name: {viewModel.property.owner.name}
            </p>
            <p className="text-[20px]">Id: {viewModel.property.id}</p>
          </div>

          <div>
            <h3 className="font-bold text-[20px]">
              is the rightful owner of the property located at
            </h3>
            <p className="text-[20px]">
              Property Address: {viewModel.property.address}
            </p>
            <p className="text-[20px]">
              Bedrooms: {viewModel.property.bedroom}
            </p>
            <p className="text-[20px]">
              Bathrooms: {viewModel.property.bathroom}
            </p>
          </div>

          <h3 className="font-bold text-[20px]">
            This certificate is issued on{" "}
            {moment
              .unix(
                nanoToSecondTimestampto(
                  Number(viewModel.property.history[0].startDate)
                )
              )
              .format("DD/MM/YYYY")}
            , acknowledging the full and legal ownership rights of the
            above-named individual over the mentioned property.
          </h3>

          <hr />

          <div>
            <h3 className="font-bold text-[20px]">NOTES</h3>
            <ul>
              <li className="text-[20px]">
                - This certificate is secured by blockchain technology,
                providing an immutable record of ownership.
              </li>
              <li className="text-[20px]">
                - The terms and conditions of the smart contract govern the
                ownership transfer and transaction details.
              </li>
              <li className="text-[20px]">
                - For any inquiries or verification, contact TerraX.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateGenerateView;
