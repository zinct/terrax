"use client";

import AuthContext from "@/core/contexts/AuthContext";
import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { useContext, useEffect, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import { createRoot } from "react-dom/client";
import { useRouter } from "next/navigation";

export default function useAssetManagerViewModel() {
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTab] = useState(0);
  const [properties, setProperties] = useState(0);
  const { authClient } = useContext(AuthContext);
  const [notAuthenticated, setNotAuthenticated] = useState(null);
  const pdfRef = useRef();
  const router = useRouter();

  function handleDownloadPDF(property) {
    const html = (
      <div
        className="absolute top-0 z-0 bg-gradient-to-bl from-[#00B3BE] w-full via-[#F3F3F3] to-[#FF8660] px-[10rem] py-[5rem]"
        style={{ height: "100vh" }}
      >
        <div className="rounded-xl px-20 py-10 w-full text-[#2A2A2E] bg-white flex flex-col justify-center items-center">
          <img className="w-[195px] mb-5" src="images/pdf/logo.png" alt="" />
          <h2 className="text-[30px] text-center font-bold text-[#2A2A2E] mb-20">
            E-CERTIFICATE <br /> OF PROPERTY OWNERSHIP
          </h2>

          <div className="flex flex-col w-full items-start gap-y-5">
            <div>
              <h3 className="font-bold text-[20px]">This is to certify that</h3>
              <p className="text-[20px]">Owner’s Name: Johan Diesel</p>
              <p className="text-[20px]">Id: #484NA9</p>
            </div>

            <div>
              <h3 className="font-bold text-[20px]">
                is the rightful owner of the property located at
              </h3>
              <p className="text-[20px]">
                Property Address: Jl. Jeruk Blok 8 No.11, Jakarta Selatan
              </p>
              <p className="text-[20px]">Size: 3847 sqft</p>
              <p className="text-[20px]">Bedrooms: 4</p>
              <p className="text-[20px]">Bathrooms: 3</p>
            </div>

            <h3 className="font-bold text-[20px]">
              This certificate is issued on 26/01/2024, acknowledging the full
              and legal ownership rights of the above-named individual over the
              mentioned property.
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

    const tempContainer = document.createElement("div");
    document.body.appendChild(tempContainer);
    createRoot(html, tempContainer);

    html2canvas(tempContainer).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jspdf("l", "pt", "a5", false);
      pdf.addImage(imgData, "PNG", 0, 35, 600, 350);
      pdf.save("e-certificate.pdf");
    });
  }

  async function getProperties() {
    try {
      setIsLoading(true);
      const identity = await authClient.getIdentity();
      const terraxActor = makeTerraxActor({ identity });
      const response = await terraxActor.getCurrentProperties();
      setIsLoading(false);

      if (response.Ok) {
        setProperties(response.Ok);
      } else {
        setNotAuthenticated(true);
      }
    } catch (err) {
      console.error("Somethin went wrong with message,", err);
    }
  }

  useEffect(() => {
    getProperties();
  }, [authClient]);

  return {
    pdfRef,
    handleDownloadPDF,
    tab,
    notAuthenticated,
    setTab,
    isLoading,
    properties,
  };
}