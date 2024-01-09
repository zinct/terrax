"use client";

import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { arrayBufferToImgSrc, blobToBase64, fileToCanisterBinaryStoreFormat, getFileExtension, resizeImage } from "@/core/utils/imageUtilS";
import { AuthClient } from "@dfinity/auth-client";
import moment from "moment";
import { initScriptLoader } from "next/script";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { uploadImage } from "@/core/services/imageService";

const Page = () => {
  const ImageMaxWidth = 2048;

  const [imageId, setImageId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const [authClient, setAuthClient] = useState(null);

  useEffect(() => {
    async function init() {
      const authClients = await AuthClient.create();
      setAuthClient(authClients);
    }

    init();
  }, []);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        try {
          const firstFile = acceptedFiles[0];
          // const newFile = await resizeImage(firstFile, ImageMaxWidth);
          setFile(firstFile);
        } catch (error) {
          console.error(error);
        }
      }
    },
  });

  async function submit() {
    if (file == null) {
      alert("Image null");
      return;
    }

    // Initialize Firebase

    setLoading(true);
    setImageId(null);

    const idCard = await fileToCanisterBinaryStoreFormat(file);
    const identity = await authClient.getIdentity();
    const terraxActor = makeTerraxActor({ identity });

    const principal = await terraxActor.whoAmI();

    // Upload File To Firebase

    const uploadedImageURL = await uploadImage(file, `${principal}.${getFileExtension(file)}`);

    console.log(uploadedImageURL);
  }

  async function submitProperti() {
    if (file == null) {
      alert("Image null");
      return;
    }

    const idCard = await fileToCanisterBinaryStoreFormat(file);
    const identity = await authClient.getIdentity();

    const terraxActor = makeTerraxActor({ identity });

    const test = await terraxActor.createProperty({
      name: "Rumah Full-Furnish di Jaksel",
      description: "Discover the perfect blend of comfort and style in this inviting 3-bedroom home. Nestled in a prime location, this property boasts a spacious living area, modern kitchen, and a serene backyard. The master bedroom features an ensuite bathroom, providing a private oasis. With contemporary finishes throughout, this home is move-in ready. Conveniently located near schools, parks, and shopping centers, it offers an ideal lifestyle for families. Don't miss the chance to make this delightful house your new home. Schedule a viewing today!",
      price: 30,
      image: [idCard, idCard],
      category: {
        used: null,
      },
      bedroom: 1,
      bathroom: 2,
      dining: 4,
      livingRoom: 2,
      firstFloor: 5,
      secondFloor: 2,
      groundFloor: 8,
      construtionArea: 19,
      address: "JL.Jeruk, Jakarta Selatan",
      latitude: 0,
      longitude: 0,
    });

    console.log(test);
  }

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  async function login() {
    await authClient.login({
      identityProvider: "http://127.0.0.1:4943/?canisterId=bkyz2-fmaaa-aaaaa-qaaaq-cai",
      onSuccess: () => {
        console.log("Auth Success");
      },
      onError: (err) => {
        console.log("Auth Error", err);
      },
    });
  }

  async function getUser() {
    const identity = await authClient.getIdentity();
    const terraxActor = makeTerraxActor({ identity });

    // const test = await terraxActor.whoAmI();
    const test = await terraxActor.connectUser();
    console.log(test);
    // const byteArray = new Uint8Array(test.Ok[0].idCard);
    // const picBlob = new Blob([byteArray], { type: `image/jpeg` });
    // console.log(await blobToBase64(picBlob));
  }

  async function getP() {
    const terraxActor = makeTerraxActor();

    // const test = await terraxActor.whoAmI();
    const test = await terraxActor.getProperty({
      category: {
        used: null,
      },
      name: "Indra",
    });
    console.log(test);
    // const byteArray = new Uint8Array(test.Ok[0].idCard);
    // const picBlob = new Blob([byteArray], { type: `image/jpeg` });
    // console.log(await blobToBase64(picBlob));
  }

  function dummyProperti() {}

  return (
    <div className="bg-white" style={{ height: "100vh" }}>
      <div className="mx-[20rem] pt-[10rem]">
        <button className="border border-sky-500" onClick={login}>
          Login
        </button>
        <button className="border border-sky-500" onClick={getUser}>
          Get User
        </button>
        <br />
        <button className="border border-sky-500" onClick={getP}>
          Get Propert
        </button>
        <h2>Create User</h2>
        <div action="" className="flex flex-col gap-5">
          <h2>Image</h2>
          <div>
            <label htmlFor="name">Upload Image: &nbsp;</label>
            <button {...getRootProps({ className: "dropzone border border-sky-500" })}>
              Pick a Image
              <input {...getInputProps()} />
            </button>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </div>
          <button onClick={submit}>{"Submit"}</button>
        </div>
        <button onClick={submitProperti}>{"Submit Propertie"}</button>
        <br />
        <button className="mt-10" onClick={dummyProperti}>
          {"Dummy Property"}
        </button>
      </div>
    </div>
  );
};

export default Page;
