import Image from "next/image";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";

const SignInModal = ({
  isShow,
  onClose,
  onSignIn,
  onRegister,
  isLoading,
  isSignModalShow = null,
}) => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div
      className={`absolute z-20 top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center backdrop-blur-xl ${
        isSignModalShow !== null
          ? isSignModalShow !== true && "hidden"
          : !isShow && "hidden"
      }`}
    >
      <div
        className="bg-zinc-900 rounded-lg w-96 p-10 space-y-5 text-center absolute"
        style={{ marginTop: "10rem" }}
      >
        <button onClick={onClose} className="absolute top-5 right-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 6L18 18"
              stroke="#CCD2E3"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M18 6L6 18"
              stroke="#CCD2E3"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="w-full flex justify-center">
          <Image
            src="/svg/terrax.svg"
            width={100}
            height={35}
            alt="TerraX Logo"
          />
        </div>
        <p className="text-white text-2xl font-bold">Sign in To TerraX</p>
        <p className="text-gray-500">
          Pushing the boundaries of Web3 Property Marketplace.
        </p>
        <div className="mt-5">
          <button
            onClick={onSignIn}
            className="bg-zinc-800 px-5 py-3 flex items-center justify-center mx-auto w-full rounded-lg text-white hover:bg-zinc-700"
          >
            {isLoading ? (
              <ScaleLoader height={20} color="white" />
            ) : (
              <>
                <Image
                  className="inline-block mr-3"
                  src="/images/icp.png"
                  width={25}
                  height={25}
                  alt="ICP Logo"
                />
                {isRegister ? "Sign Up" : "Sign In"} with Internet Identity
              </>
            )}
          </button>
        </div>
        <p className="text-white text-sm">
          {!isRegister ? "Already have an account" : "Not registered yet?"}{" "}
          <button
            onClick={() => {
              setIsRegister(!isRegister);
            }}
            className="text-cyan-500"
          >
            {!isRegister ? "Sign In" : "Create an account"}
          </button>
        </p>
        <p className="text-gray-500 text-sm">
          By continuing, you agree to our Terms of Service and our Privacy
          Policy
        </p>
      </div>
    </div>
  );
};

export default SignInModal;
