"use client";

import Image from "next/image";

export default function ECertificate() {
  return (
    <div>
      <div className="bg-zinc-900 rounded-lg p-5">
        <div className="flex flex-row items-center">
          <div className="relative h-28 w-40 mr-5">
            <Image
              className="rounded-lg"
              src="/images/img1.png"
              alt="Image"
              fill
            />
          </div>
          <div className="flex-1">
            <h3 className="text-white mt-3 mb-2">E-Certificate</h3>
            <p className="text-gray-500 flex flex-row mb-3">ID: 488403949</p>
            <p className="text-gray-500 flex flex-row mb-3">
              <Image
                className="mr-2"
                src="/svg/point.svg"
                alt="Point"
                width={15}
                height={15}
              />
              JL.Jeruk, Jakarta Selatan
            </p>
          </div>
          <button onClick={() => alert("download")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12 14.5L11.2929 15.2071L12 15.9142L12.7071 15.2071L12 14.5ZM13 5.5C13 4.94772 12.5523 4.5 12 4.5C11.4477 4.5 11 4.94771 11 5.5L13 5.5ZM6.29289 10.2071L11.2929 15.2071L12.7071 13.7929L7.70711 8.79289L6.29289 10.2071ZM12.7071 15.2071L17.7071 10.2071L16.2929 8.79289L11.2929 13.7929L12.7071 15.2071ZM13 14.5L13 5.5L11 5.5L11 14.5L13 14.5Z"
                fill="#62D9FF"
              />
              <path
                d="M5 16.5L5 17.5C5 18.6046 5.89543 19.5 7 19.5L17 19.5C18.1046 19.5 19 18.6046 19 17.5V16.5"
                stroke="#62D9FF"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
