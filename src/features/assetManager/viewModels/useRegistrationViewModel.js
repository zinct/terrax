"use client";

import * as Yup from "yup";
import AuthContext from "@/core/contexts/AuthContext";
import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { imageFileToBase64 } from "@/core/utils/imageUtilS";

export default function useRegistrationViewModel() {
  const { authClient } = useContext(AuthContext);

  const [tab, setTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [propertyCategory, setPropertyCategory] = useState("new");
  const [propertyImages, setPropertyImages] = useState([]);
  const [propertyBase64, setPropertyBase64] = useState([]);

  // Image Input
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    maxFiles: 5,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        try {
          setPropertyImages(acceptedFiles);
          const promises = acceptedFiles.map(function (row) {
            return imageFileToBase64(row);
          });
          const newBase64 = await Promise.all(promises);

          setPropertyBase64(newBase64);

          console.log("tes", newBase64);
          setPropertyBase64(newBase64);
        } catch (error) {
          console.error(error);
        }
      }
    },
  });

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      name: "",
      description: "",
      price: "",
      bedroom: "",
      bathroom: "",
      dining: "",
      livingRoom: "",
      groundFloor: "",
      firstFloor: "",
      secondFloor: "",
      construtionArea: "",
      address: "",
      latitude: "",
      longitude: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("The field is required"),
      description: Yup.string().required("The field is required"),
      price: Yup.string().required("The field is required"),
      price: Yup.string().required("The field is required"),
      bedroom: Yup.string().required("The field is required"),
      bathroom: Yup.string().required("The field is required"),
      livingRoom: Yup.string().required("The field is required"),
      groundFloor: Yup.string().required("The field is required"),
      firstFloor: Yup.string().required("The field is required"),
      secondFloor: Yup.string().required("The field is required"),
      construtionArea: Yup.string().required("The field is required"),
      address: Yup.string().required("The field is required"),
      latitude: Yup.string().required("The field is required"),
      longitude: Yup.string().required("The field is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {},
  });

  return {
    tab,
    propertyBase64,
    propertyImages,
    propertyCategory,
    setPropertyCategory,
    getRootProps,
    getInputProps,
    acceptedFiles,
    setTab,
    isLoading,
  };
}
