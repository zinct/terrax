"use client";

import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { useContext, useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import AuthContext from "@/core/contexts/AuthContext";
import Error from "next/error";

export default function useECertificateViewModel() {
  const pdfRef = useRef();
  const { authClient } = useContext(AuthContext);
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function validateCertificate(id) {
    try {
      setIsLoading(true);
      const identity = await authClient.getIdentity();
      const terraxActor = makeTerraxActor({ identity });
      const response = await terraxActor.getProperty(id);
      setIsLoading(false);

      console.log(response);

      if (response?.Ok) {
        return setProperty(response.Ok);
      }

      return <Error statusCode={401} />;
    } catch (err) {
      return <Error statusCode={500} />;
    }
  }

  useEffect(() => {
    if (property) return handleDownloadPDF();
  }, [property]);

  function handleDownloadPDF() {
    html2canvas(pdfRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jspdf("l", "pt", "a5", false);
      pdf.addImage(imgData, "PNG", 0, 35, 600, 350);
      pdf.save("e-certificate.pdf");
      window.close();
    });
  }

  return {
    pdfRef,
    property,
    validateCertificate,
    isLoading,
  };
}
