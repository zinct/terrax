"use client";

import { makeTerraxActor } from "@/core/services/actorLocatorService";
import {
  fileToCanisterBinaryStoreFormat,
  resizeImage,
} from "@/core/utils/imageUtilS";
import { AuthClient } from "@dfinity/auth-client";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/terrax-de163.appspot.com/o/files%2Fproperties%2Fdummies%2F1.png?alt=media&token=34513744-e2d2-4c7e-99d2-b95d5da77e0b",
  "https://firebasestorage.googleapis.com/v0/b/terrax-de163.appspot.com/o/files%2Fproperties%2Fdummies%2F2.png?alt=media&token=d4fa1db9-6581-4c1e-b09f-f75daf5ce7ca",
  "https://firebasestorage.googleapis.com/v0/b/terrax-de163.appspot.com/o/files%2Fproperties%2Fdummies%2F3.png?alt=media&token=bc93d2d6-b5e4-4e0e-9a15-d6eff0e6f32e",
  "https://firebasestorage.googleapis.com/v0/b/terrax-de163.appspot.com/o/files%2Fproperties%2Fdummies%2F4.png?alt=media&token=23315c72-a2cb-4b5a-bf37-2752d6fd0f47",
  "https://firebasestorage.googleapis.com/v0/b/terrax-de163.appspot.com/o/files%2Fproperties%2Fdummies%2F5.png?alt=media&token=1c09cf86-ce74-4bfc-99a6-808a5bd5aafe",
  "https://firebasestorage.googleapis.com/v0/b/terrax-de163.appspot.com/o/files%2Fproperties%2Fdummies%2F6.png?alt=media&token=291d92e2-fb1d-43fa-acac-931b948fbb86",
];

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
          const newFile = await resizeImage(firstFile, ImageMaxWidth);
          setFile(newFile);
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

    setLoading(true);
    setImageId(null);

    const idCard = await fileToCanisterBinaryStoreFormat(file);
    const identity = await authClient.getIdentity();

    const terraxActor = makeTerraxActor({ identity });

    const test = await terraxActor.registerUser({
      name: "Indra Mahesa",
      email: "indramahesa128@gmail.com",
      address: "bandung",
      birth: moment().unix(),
      idCard: idCard,
      phone: "081395749832",
    });

    console.log(test);
    // const newImageId = await imageActor.create(fileArray);
    // setImageId(newImageId);

    // setLoading(false);
  }

  async function submitProperti() {
    const identity = await authClient.getIdentity();
    const terraxActor = makeTerraxActor({ identity });

    images.map(async (row) => {
      const test = await terraxActor.createProperty({
        name: "Rumah Full-Furnish di Jaksel",
        description:
          "Discover the perfect blend of comfort and style in this inviting 3-bedroom home. Nestled in a prime location, this property boasts a spacious living area, modern kitchen, and a serene backyard. The master bedroom features an ensuite bathroom, providing a private oasis. With contemporary finishes throughout, this home is move-in ready. Conveniently located near schools, parks, and shopping centers, it offers an ideal lifestyle for families. Don't miss the chance to make this delightful house your new home. Schedule a viewing today!",
        price: 800,
        image: [row],
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
        address: "JL.Bandung, Jakarta Selatan",
        latitude: String(-6.9064866),
        longitude: String(107.7073688),
      });

      console.log(test);
    });
  }

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  async function login() {
    await authClient.login({
      identityProvider:
        "http://127.0.0.1:4943/?canisterId=bkyz2-fmaaa-aaaaa-qaaaq-cai",
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

    const test = await terraxActor.getUserByPrincipal();
    console.log(test);
  }

  async function getP() {
    const terraxActor = makeTerraxActor();

    const test = await terraxActor.getProperty({
      category: {
        used: null,
      },
      name: "Indra",
    });
    console.log(test);
  }

  async function getProfile() {
    const identity = await authClient.getIdentity();
    const terraxActor = makeTerraxActor({ identity });
    const test = await terraxActor.getUserByPrincipal();

    console.log(test);
  }

  async function insertProperty() {
    const identity = await authClient.getIdentity();
    const terraxActor = makeTerraxActor({ identity });

    const test = await terraxActor.getUserByPrincipal();
  }

  return (
    <div style={{ height: "100vh" }}>
      <div className="mx-[20rem] pt-[10rem]">
        <button className="border border-sky-500" onClick={login}>
          Login
        </button>
        <br />
        <button className="border border-sky-500" onClick={getProfile}>
          Get Profile
        </button>
        <br />
        <button className="border border-sky-500" onClick={insertProperty}>
          Insert Property
        </button>
        <br />
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
            <button
              {...getRootProps({ className: "dropzone border border-sky-500" })}
            >
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
      </div>
    </div>
  );
};

export default Page;
