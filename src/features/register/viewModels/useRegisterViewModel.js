"use client";

import { useFormik, useFormikContext } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { uploadImage } from "@/core/services/imageService";
import { AuthClient } from "@dfinity/auth-client";
import moment from "moment";
import AuthContext from "@/core/contexts/AuthContext";

export default function useRegisterViewmodel() {
  const { authClient, setUser } = useContext(AuthContext);
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [idCard, setIdCard] = useState(null);
  const [idCardError, setIdCardError] = useState(false);
  const [profile, setProfile] = useState(null);

  const [isSubmitting, setIsSubmmiting] = useState(false);

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      day: "",
      month: "",
      year: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("The name field is required"),
      email: Yup.string()
        .email("Please input a valid email")
        .required("The email field is required"),
      address: Yup.string().required("The address field is required"),
      phone: Yup.string().required("The phone field is required"),
      day: Yup.number().required("required"),
      month: Yup.number().required("required"),
      year: Yup.number().required("required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      if (step == 1) {
        setStep(2);
        return;
      }

      if (!idCard) {
        setIdCardError(true);
        return;
      }

      setIsSubmmiting(true);
      const identity = await authClient.getIdentity();

      const terraxActor = makeTerraxActor({ identity });
      const principal = await terraxActor.whoAmI();
      let profileImageURL = null;

      const idCardImageURL = await uploadImage(
        idCard,
        `/files/images/idcards/${principal}.jpeg`
      );

      if (profile) {
        profileImageURL = await uploadImage(
          profile,
          `/files/images/profile/${principal}.jpeg`
        );
      }

      const response = await terraxActor.registerUser({
        name: values.name,
        email: values.email,
        address: values.address,
        birth: moment(
          `${values.year.toString().padStart(4, "0")}-${values.month
            .toString()
            .padStart(2, "0")}-${values.day.toString().padStart(2, "0")}`
        ).unix(),
        profileImageURL: profileImageURL ? [profileImageURL] : [],
        idCardImageURL: idCardImageURL,
        phone: values.phone,
      });
      setIsSubmmiting(false);

      if (response?.Ok) {
        setUser(response?.Ok);
        router.push("/");
        return;
      }

      console.log("Something went wrong", response);
    },
  });
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        try {
          const newFile = acceptedFiles[0];
          setProfile(newFile);
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
          setIdCard(newFile);
        } catch (error) {
          console.error(error);
        }
      }
    },
  });

  const stepDetail = [
    {
      title: "Please complete your profile",
      desc: "Fill in the form to complete registration",
    },
    {
      title: "Upload e-KTP",
      desc: "Upload your KTP to verify your identity. Don’t worry your data is secure.",
    },
  ];

  const handleBack = () => {
    if (step !== 1) {
      setStep(step - 1);
    } else {
      router.push("/");
    }
  };

  const handleNext = () => {
    if (step !== 2) {
      formik.submitForm();
    } else {
      formik.submitForm();
    }
  };

  return {
    formik,
    getRootProps,
    getInputProps,
    acceptedFiles,
    getRootProps2,
    getInputProps2,
    acceptedFiles2,
    isSubmitting,
    step,
    setStep,
    handleBack,
    handleNext,
    stepDetail,
    success,
    setSuccess,
    idCardError,
  };
}
