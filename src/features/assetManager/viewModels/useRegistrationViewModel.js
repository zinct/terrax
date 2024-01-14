"use client";

import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import AuthContext from "@/core/contexts/AuthContext";
import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { imageFileToBase64 } from "@/core/utils/imageUtilS";
import { uploadImage } from "@/core/services/imageService";
import { getPropertyCategory } from "@/core/utils/propertyUtils";

export default function useRegistrationViewModel() {
  const { authClient } = useContext(AuthContext);

  const [tab, setTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [propertyCategory, setPropertyCategory] = useState("new");
  const [propertyImages, setPropertyImages] = useState([]);
  const [certificateImage, setCertifcateImage] = useState(null);
  const [isMaps, setIsMaps] = useState(false);
  const [propertyBase64, setPropertyBase64] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const [viewPort, setViewPort] = useState({
    lat: -6.9064866,
    lng: 107.7073688,
  });

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

  const {
    getRootProps: getRootProps2,
    getInputProps: getInputProps2,
    acceptedFiles: acceptedFiles2,
  } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        try {
          const newFile = acceptedFiles[0];
          setCertifcateImage(newFile);
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
    }),
    onSubmit: async (values, { setSubmitting }) => {
      if (certificateImage === null || propertyImages.length === 0) {
        console.log("Image Required");
        return;
      }

      setSubmitting(true);
      const identity = await authClient.getIdentity();

      const terraxActor = makeTerraxActor({ identity });

      const certificateImageURL = await uploadImage(
        certificateImage,
        `/files/images/certificate/${uuidv4()}.jpeg`
      );
      const propertyImagesURL = [];

      for (const row of propertyImages) {
        const imageURL = await uploadImage(
          row,
          `/files/images/properties/${uuidv4()}.jpeg`
        );
        propertyImagesURL.push(imageURL);
      }

      const response = await terraxActor.createProperty({
        name: values.name,
        description: values.description,
        price: values.price,
        image: propertyImagesURL,
        category: getPropertyCategory(propertyCategory),
        bedroom: values.bedroom,
        bathroom: values.bathroom,
        dining: values.dining,
        livingRoom: values.livingRoom,
        firstFloor: values.firstFloor,
        secondFloor: values.secondFloor,
        groundFloor: values.groundFloor,
        construtionArea: values.construtionArea,
        address: values.address,
        latitude: String(viewPort.lat),
        longitude: String(viewPort.lng),
      });

      setSubmitting(false);

      if (response?.Ok) {
        setIsSuccess(true);
        return;
      }

      console.log("Something went wrong", response);
    },
  });

  function handleCoordinate(coord) {
    setViewPort(coord);
  }

  function handleSuccess() {
    setIsMaps(false);
  }

  return {
    isSuccess,

    getRootProps2,
    getInputProps2,
    acceptedFiles2,
    handleSuccess,
    handleCoordinate,
    viewPort,
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
    isMaps,
    setIsMaps,
    formik,
  };
}
