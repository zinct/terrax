"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const stepDetail = [
    {
      title: "Type of Listing",
      desc: "Please select one of your listing",
    },
    {
      title: "Property/Land Details",
      desc: "Fill in the form to complete registration.",
    },
    {
      title: "Upload Certificate",
      desc: "bla bla bla.",
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
    if (step !== 3) {
      setStep(step + 1);
    } else {
      setSuccess(true);
    }
  };

  return (
    <main className="relative">
      <div
        className={`fixed z-20 top-0 w-full h-full flex items-center justify-center backdrop-blur-sm ${
          !success && "hidden"
        }`}
      >
        <div className="bg-zinc-900 rounded-lg w-96 p-10 space-y-5 text-center">
          <p className="text-white text-2xl font-bold">
            Your Data Has Been Submitted!
          </p>
          <p className="text-gray-500">
            Were checking your details and will send you a confirmation email
            within 24 hours. Kindly check your mailbox regularly.
          </p>
          <div className="max-w-24">
            <svg
              width="301"
              height="230"
              viewBox="0 0 301 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_62_3887)">
                <ellipse
                  cx="147.224"
                  cy="186.812"
                  rx="110.607"
                  ry="21.3375"
                  fill="#1F88F8"
                  fillOpacity="0.35"
                />
              </g>
              <path
                d="M148.439 229.402C211.786 229.402 263.14 178.049 263.14 114.701C263.14 51.3534 211.786 0 148.439 0C85.0912 0 33.7378 51.3534 33.7378 114.701C33.7378 178.049 85.0912 229.402 148.439 229.402Z"
                fill="url(#paint0_linear_62_3887)"
              />
              <g filter="url(#filter1_d_62_3887)">
                <path
                  d="M244.52 77.624L146.229 146.219L47.9385 77.624L137.916 14.8054C140.356 13.1047 143.259 12.1929 146.233 12.1929C149.208 12.1929 152.111 13.1047 154.551 14.8054L172.499 27.3528L177.198 30.6161L224.516 63.657L229.501 67.1569L244.52 77.624Z"
                  fill="url(#paint1_linear_62_3887)"
                />
              </g>
              <path
                d="M130.247 135.066L47.9385 193.594V77.624L130.247 135.066Z"
                fill="url(#paint2_linear_62_3887)"
              />
              <path
                d="M162.219 135.066L244.528 193.594V77.624L162.219 135.066Z"
                fill="url(#paint3_linear_62_3887)"
              />
              <path
                d="M47.9385 193.594L137.81 129.699C140.27 127.947 143.214 127.006 146.233 127.006C149.253 127.006 152.197 127.947 154.657 129.699L244.52 193.594H47.9385Z"
                fill="url(#paint4_linear_62_3887)"
              />
              <g filter="url(#filter2_d_62_3887)">
                <path
                  d="M58.3239 56.6099C43.2553 63.6586 27.0628 67.9977 10.4888 69.4281C12.7283 74.634 28.6406 100.693 75.8765 122.165C77.1534 122.361 106.65 108.639 122.837 99.2293C122.287 100.015 72.5565 81.7159 58.3239 56.6099Z"
                  fill="url(#paint5_linear_62_3887)"
                />
              </g>
              <path
                d="M59.49 69.566C58.7966 69.0849 57.9183 68.955 57.1153 69.2148L30.7513 77.7443C29.8069 78.0499 29.4704 79.2131 30.1059 79.9757C30.6176 80.5898 31.4552 80.8243 32.2114 80.5653L59.248 71.3048C60.0109 71.0435 60.1526 70.0257 59.49 69.566Z"
                fill="url(#paint6_linear_62_3887)"
              />
              <path
                d="M59.0329 80.0712C58.3642 79.4433 57.4044 79.2341 56.5351 79.5266L38.2837 85.6691C37.4789 85.9399 37.1947 86.9329 37.7344 87.5885C38.1753 88.1241 38.9019 88.3306 39.5586 88.107L58.7051 81.5879C59.3515 81.3678 59.5307 80.5385 59.0329 80.0712Z"
                fill="url(#paint7_linear_62_3887)"
              />
              <path
                d="M68.8291 85.2731C68.1313 84.7143 67.1928 84.5596 66.3526 84.865L45.3292 92.5059C44.5041 92.8058 44.2558 93.8526 44.8583 94.4911C45.3192 94.9797 46.027 95.1464 46.6576 94.915L68.5677 86.8748C69.2488 86.6248 69.3954 85.7266 68.8291 85.2731Z"
                fill="url(#paint8_linear_62_3887)"
              />
              <path
                d="M76.1789 101.044C75.5326 100.33 74.5141 100.086 73.6141 100.429L61.5992 105.014C60.8614 105.295 60.5954 106.203 61.0645 106.838C61.5041 107.434 62.2876 107.661 62.9777 107.394L75.8558 102.406C76.4112 102.191 76.5785 101.486 76.1789 101.044Z"
                fill="url(#paint9_linear_62_3887)"
              />
              <g filter="url(#filter3_d_62_3887)">
                <path
                  d="M232.508 92.9507C250.78 101.498 270.414 106.759 290.511 108.494C287.796 114.806 268.501 146.404 211.225 172.44C209.676 172.678 173.91 156.039 154.282 144.629C154.949 145.582 215.25 123.393 232.508 92.9507Z"
                  fill="url(#paint10_linear_62_3887)"
                />
              </g>
              <path
                d="M231.095 108.661C231.936 108.078 233 107.92 233.974 108.235L265.942 118.578C267.087 118.948 267.495 120.359 266.725 121.284C266.104 122.028 265.089 122.313 264.172 121.998L231.388 110.77C230.463 110.453 230.291 109.219 231.095 108.661Z"
                fill="url(#paint11_linear_62_3887)"
              />
              <path
                d="M222.144 117.175C222.955 116.413 224.119 116.16 225.173 116.514L247.304 123.962C248.28 124.291 248.624 125.495 247.97 126.29C247.435 126.939 246.554 127.19 245.758 126.919L222.542 119.014C221.758 118.747 221.54 117.741 222.144 117.175Z"
                fill="url(#paint12_linear_62_3887)"
              />
              <path
                d="M212.946 124.242C213.792 123.565 214.93 123.377 215.949 123.747L241.441 133.012C242.441 133.376 242.742 134.645 242.012 135.42C241.453 136.012 240.595 136.214 239.83 135.934L213.263 126.184C212.437 125.881 212.259 124.792 212.946 124.242Z"
                fill="url(#paint13_linear_62_3887)"
              />
              <path
                d="M192.248 138.382C193.032 137.515 194.267 137.219 195.358 137.636L209.927 143.195C210.821 143.536 211.144 144.637 210.575 145.407C210.042 146.129 209.092 146.405 208.255 146.081L192.64 140.033C191.966 139.772 191.764 138.917 192.248 138.382Z"
                fill="url(#paint14_linear_62_3887)"
              />
              <path
                d="M201.758 130.831C202.62 130.29 203.684 130.178 204.64 130.528L238.208 142.801C239.281 143.193 239.541 144.592 238.681 145.344C238.112 145.841 237.317 145.987 236.608 145.726L201.98 132.97C201.046 132.626 200.915 131.36 201.758 130.831Z"
                fill="url(#paint15_linear_62_3887)"
              />
              <path
                d="M83.45 88.7201C82.7388 88.274 81.8613 88.1816 81.0728 88.4699L53.3892 98.592C52.5043 98.9155 52.29 100.069 52.9995 100.689C53.4688 101.099 54.1245 101.22 54.7092 101.004L83.2664 90.4845C84.0366 90.2008 84.1452 89.1562 83.45 88.7201Z"
                fill="url(#paint16_linear_62_3887)"
              />
              <path
                d="M243.46 26.9983C243.46 29.6438 241.315 31.7884 238.67 31.7884C236.024 31.7884 233.88 29.6438 233.88 26.9983C233.88 24.3528 236.024 22.2082 238.67 22.2082C241.315 22.2082 243.46 24.3528 243.46 26.9983Z"
                stroke="url(#paint17_linear_62_3887)"
                strokeWidth="2.61276"
              />
              <circle
                cx="68.8406"
                cy="204.666"
                r="4.79006"
                stroke="url(#paint18_linear_62_3887)"
                strokeWidth="2.61276"
              />
              <circle
                cx="216.026"
                cy="214.246"
                r="4.79006"
                stroke="url(#paint19_linear_62_3887)"
                strokeWidth="2.61276"
              />
              <path
                d="M85.0978 31.9318C85.6127 29.7988 88.6466 29.7988 89.1615 31.9318L90.8944 39.1106C91.0784 39.8728 91.6735 40.4679 92.4358 40.6519L99.6146 42.3849C101.748 42.8998 101.748 45.9337 99.6146 46.4486L92.4358 48.1815C91.6735 48.3655 91.0784 48.9606 90.8944 49.7229L89.1615 56.9017C88.6466 59.0347 85.6127 59.0347 85.0978 56.9017L83.3648 49.7229C83.1808 48.9606 82.5857 48.3655 81.8235 48.1815L74.6447 46.4486C72.5117 45.9337 72.5117 42.8998 74.6447 42.3849L81.8235 40.6519C82.5857 40.4679 83.1808 39.8728 83.3648 39.1106L85.0978 31.9318Z"
                fill="url(#paint20_linear_62_3887)"
              />
              <path
                d="M259.608 183.417C260.123 181.284 263.157 181.284 263.672 183.417L265.405 190.596C265.589 191.358 266.184 191.953 266.946 192.137L274.125 193.87C276.258 194.385 276.258 197.419 274.125 197.934L266.946 199.667C266.184 199.851 265.589 200.446 265.405 201.208L263.672 208.387C263.157 210.52 260.123 210.52 259.608 208.387L257.875 201.208C257.691 200.446 257.096 199.851 256.334 199.667L249.155 197.934C247.022 197.419 247.022 194.385 249.155 193.87L256.334 192.137C257.096 191.953 257.691 191.358 257.875 190.596L259.608 183.417Z"
                fill="url(#paint21_linear_62_3887)"
              />
              <path
                d="M36.9715 166.614C38.2955 166.402 39.3525 167.703 38.8741 168.956L35.6451 177.411C35.1667 178.664 33.5117 178.929 32.6661 177.888L26.9581 170.864C26.1125 169.823 26.7105 168.258 28.0345 168.046L36.9715 166.614Z"
                fill="url(#paint22_linear_62_3887)"
              />
              <path
                d="M263.066 80.4219C262.735 79.1226 263.935 77.9519 265.226 78.3147L273.939 80.7633C275.23 81.126 275.644 82.7502 274.684 83.6867L268.207 90.0084C267.247 90.9449 265.634 90.4915 265.303 89.1922L263.066 80.4219Z"
                fill="url(#paint23_linear_62_3887)"
              />
              <defs>
                <filter
                  id="filter0_f_62_3887"
                  x="14.8437"
                  y="143.702"
                  width="264.76"
                  height="86.2213"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="10.8865"
                    result="effect1_foregroundBlur_62_3887"
                  />
                </filter>
                <filter
                  id="filter1_d_62_3887"
                  x="44.4548"
                  y="12.1929"
                  width="203.549"
                  height="140.993"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3.48368" />
                  <feGaussianBlur stdDeviation="1.74184" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_62_3887"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_62_3887"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_62_3887"
                  x="0.0377321"
                  y="49.6425"
                  width="133.251"
                  height="86.4587"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3.48368" />
                  <feGaussianBlur stdDeviation="5.22552" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0196078 0 0 0 0 0.168627 0 0 0 0 0.396078 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_62_3887"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_62_3887"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_62_3887"
                  x="134.196"
                  y="91.2088"
                  width="165.841"
                  height="109.103"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-5.28021" dy="13.0638" />
                  <feGaussianBlur stdDeviation="7.40282" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.021441 0 0 0 0 0.168056 0 0 0 0 0.395833 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_62_3887"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_62_3887"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_62_3887"
                  x1="137.989"
                  y1="-10.5"
                  x2="149.904"
                  y2="365.463"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#62D9FF" stopOpacity="0" />
                  <stop offset="1" stopColor="#FF7A57" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_62_3887"
                  x1="146.229"
                  y1="12.1929"
                  x2="146.489"
                  y2="290"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FCFEFF" />
                  <stop offset="1" stopColor="#62D9FF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_62_3887"
                  x1="53.5972"
                  y1="136.792"
                  x2="130.247"
                  y2="136.792"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#62D9FF" />
                  <stop offset="1" stopColor="#FF8660" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_62_3887"
                  x1="167.878"
                  y1="136.792"
                  x2="244.528"
                  y2="136.792"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#62D9FF" />
                  <stop offset="1" stopColor="#FF8660" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_62_3887"
                  x1="61.4535"
                  y1="160.979"
                  x2="244.52"
                  y2="160.979"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#62D9FF" />
                  <stop offset="1" stopColor="#FF8660" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_62_3887"
                  x1="22.6816"
                  y1="85.7857"
                  x2="96.2743"
                  y2="71.4155"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C6DDFF" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_62_3887"
                  x1="44.3862"
                  y1="72.9557"
                  x2="28.6511"
                  y2="84.2778"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8660" />
                  <stop offset="1" stopColor="#FF8660" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_62_3887"
                  x1="47.9009"
                  y1="82.3065"
                  x2="36.0193"
                  y2="90.0643"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8660" />
                  <stop offset="1" stopColor="#FF8660" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_62_3887"
                  x1="56.3476"
                  y1="88.3744"
                  x2="43.4208"
                  y2="97.8743"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8660" />
                  <stop offset="1" stopColor="#FF8660" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_62_3887"
                  x1="68.0373"
                  y1="102.429"
                  x2="59.3164"
                  y2="107.823"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8660" />
                  <stop offset="1" stopColor="#FF8660" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_62_3887"
                  x1="275.727"
                  y1="128.328"
                  x2="186.491"
                  y2="110.903"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C6DDFF" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_62_3887"
                  x1="249.409"
                  y1="112.771"
                  x2="268.489"
                  y2="126.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8660" />
                  <stop offset="1" stopColor="#FF8660" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_62_3887"
                  x1="235.642"
                  y1="119.885"
                  x2="250.049"
                  y2="129.292"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8660" />
                  <stop offset="1" stopColor="#FF8660" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint13_linear_62_3887"
                  x1="228.08"
                  y1="128.003"
                  x2="243.755"
                  y2="139.522"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8660" />
                  <stop offset="1" stopColor="#FF8660" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint14_linear_62_3887"
                  x1="202.12"
                  y1="140.061"
                  x2="212.695"
                  y2="146.601"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8660" />
                  <stop offset="1" stopColor="#FF8660" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint15_linear_62_3887"
                  x1="220.753"
                  y1="136.265"
                  x2="239.287"
                  y2="152.072"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8660" />
                  <stop offset="1" stopColor="#FF8660" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint16_linear_62_3887"
                  x1="67.7846"
                  y1="93.2014"
                  x2="52.4992"
                  y2="106.238"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8660" />
                  <stop offset="1" stopColor="#FF8660" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint17_linear_62_3887"
                  x1="233.412"
                  y1="27.1227"
                  x2="244.766"
                  y2="27.1227"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#62D9FF" />
                  <stop offset="1" stopColor="#FF8660" />
                </linearGradient>
                <linearGradient
                  id="paint18_linear_62_3887"
                  x1="63.5824"
                  y1="204.791"
                  x2="74.937"
                  y2="204.791"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#62D9FF" />
                  <stop offset="1" stopColor="#FF8660" />
                </linearGradient>
                <linearGradient
                  id="paint19_linear_62_3887"
                  x1="210.768"
                  y1="214.371"
                  x2="222.123"
                  y2="214.371"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#62D9FF" />
                  <stop offset="1" stopColor="#FF8660" />
                </linearGradient>
                <linearGradient
                  id="paint20_linear_62_3887"
                  x1="69.1016"
                  y1="44.8433"
                  x2="108.032"
                  y2="44.8433"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#62D9FF" />
                  <stop offset="1" stopColor="#FF8660" />
                </linearGradient>
                <linearGradient
                  id="paint21_linear_62_3887"
                  x1="243.612"
                  y1="196.329"
                  x2="282.542"
                  y2="196.329"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#62D9FF" />
                  <stop offset="1" stopColor="#FF8660" />
                </linearGradient>
                <linearGradient
                  id="paint22_linear_62_3887"
                  x1="28.3164"
                  y1="165.912"
                  x2="38.5461"
                  y2="178.501"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#62D9FF" />
                  <stop offset="1" stopColor="#FF8660" />
                </linearGradient>
                <linearGradient
                  id="paint23_linear_62_3887"
                  x1="263.153"
                  y1="89.105"
                  x2="274.761"
                  y2="77.7753"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#62D9FF" />
                  <stop offset="1" stopColor="#FF8660" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <Link
              href="/"
              className="bg-gradient-to-r from-cyan-400 to-orange-400 px-5 py-3 rounded-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <div className="relative z-0">
        <div className="absolute -top-10 right-0 ">
          <svg
            className="h-screen"
            xmlns="http://www.w3.org/2000/svg"
            width="1213"
            height="926"
            viewBox="0 0 1213 926"
            fill="none"
          >
            <g filter="url(#filter0_f_62_3515)">
              <path
                d="M1190.33 3.68472C1443.29 -112.686 1416.57 122.129 1402.16 225.56L702.546 214.996C688.593 77.8905 753.94 -169.767 836.065 -157.688C1046.48 -126.74 963.925 107.841 1190.33 3.68472Z"
                fill="#FF8660"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_62_3515"
                x="0.660034"
                y="-858.114"
                width="2110.12"
                height="1783.67"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="350"
                  result="effect1_foregroundBlur_62_3515"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <article className="container mx-auto relative z-10">
        <header className="flex flex-row items-center justify-between my-5">
          <div>
            <img
              src="/svg/terrax.svg"
              width={117}
              height={42}
              alt="TerraX Logo"
            />
          </div>
          <nav>
            <ul className="flex flex-row items-center justify-center space-x-16 text-white">
              <li className="text-gray-300">Home</li>
              <li className="text-gray-300">Buy</li>
              <li className="text-gray-300">Sell</li>
              <li className="text-gray-300">Asset Manager</li>
            </ul>
          </nav>
          <div>
            {/* <button className="w-24 h-12 text-white font-bold rounded-lg bg-gradient-to-r from-cyan-400 to-orange-400 p-1">
              <div
                className="h-full rounded-lg py-2"
                style={{ backgroundColor: "#000a14" }}
              >
                Sign In
              </div>
            </button> */}
          </div>
        </header>
        <div className="flex flex-col items-center justify-center min-h-screen mt-16">
          <div className="w-full bg-zinc-900 rounded-lg">
            <div className="flex">
              <button
                className={`flex-1 text-white rounded-tl-lg p-6 ${
                  step >= 1 && "font-bold bg-orange-400"
                }`}
              >
                <span
                  className={`bg-white ${
                    step >= 1 ? "text-orange-400" : "text-zinc-800"
                  } p-2 rounded-full mr-3`}
                >
                  01
                </span>
                Type of Property
              </button>
              <button
                className={`flex-1 text-white p-6 ${
                  step >= 2 && "font-bold bg-orange-400"
                }`}
              >
                <span
                  className={`bg-white ${
                    step >= 2 ? "text-orange-400" : "text-zinc-800"
                  } p-2 rounded-full mr-3`}
                >
                  02
                </span>
                Property/Land Details
              </button>
              <button
                className={`flex-1 text-white rounded-tr-lg p-6 ${
                  step >= 3 && "font-bold bg-orange-400"
                }`}
              >
                <span
                  className={`bg-white ${
                    step >= 3 ? "text-orange-400" : "text-zinc-800"
                  } p-2 rounded-full mr-3`}
                >
                  03
                </span>
                Upload Certificate Of Ownership
              </button>
            </div>
            <div className="flex-none text-center p-10 space-y-3">
              <p className="text-cyan-400 text-2xl font-bold">Step {step}</p>
              <p className="text-white text-4xl font-bold">
                {stepDetail[step - 1].title}
              </p>
              <p className="text-gray-500">{stepDetail[step - 1].desc}</p>
            </div>
            {/* STEP 1 */}
            <div
              className={`flex px-10 mb-10 space-x-10 ${
                step === 1 ? "" : "hidden"
              }`}
            >
              <div className="flex flex-row space-x-5 mt-5 w-full">
                <button
                  onClick={() => alert("accept")}
                  className="flex-1 border-2 border-cyan-400 px-5 py-3 rounded-lg text-white"
                >
                  House Property
                </button>
                <button
                  onClick={() => alert("decline")}
                  className="flex-1 border-2 border-zinc-800 px-5 py-3 rounded-lg text-white"
                >
                  Land
                </button>
              </div>
            </div>
            {/* STEP 2 */}
            <div
              className={`flex px-10 mb-10 space-x-10 ${
                step === 2 ? "" : "hidden"
              }`}
            >
              <div className="flex-1 space-y-5">
                <div>
                  <label className="text-white mb-2 block">Type</label>
                  <input
                    className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                    type="text"
                    placeholder="Type Your Username Here"
                  ></input>
                </div>
                <div>
                  <label className="text-white mb-2 block">
                    Property Description
                  </label>
                  <textarea
                    className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                    placeholder="Type Your Email Here"
                  ></textarea>
                </div>
                <div>
                  <label className="text-white mb-2 block">
                    Property Address
                  </label>
                  <textarea
                    className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                    placeholder="Type Your Username Here"
                  ></textarea>
                </div>
              </div>
              <div className="flex-1 space-y-5">
                <div>
                  <div className="flex space-x-5">
                    <div className="flex-1">
                      <label className="text-white mb-2 block">
                        Property Size
                      </label>
                      <input
                        className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                        type="number"
                        placeholder="DD"
                      ></input>
                    </div>
                    <div className="flex-1">
                      <label className="text-white mb-2 block">
                        Construction Area
                      </label>
                      <input
                        className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                        type="number"
                        placeholder="MM"
                      ></input>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex space-x-5 items-end">
                    <div className="flex-1">
                      <label className="text-white mb-2 block">
                        Property Floor
                      </label>
                      <input
                        className="py-3 px-5 w-full rounded-lg bg-zinc-800"
                        type="number"
                        placeholder="DD"
                      ></input>
                    </div>
                    <div>
                      <button
                        onClick={() => alert("add floor")}
                        className="flex-1 bg-zinc-800 px-5 py-3 rounded-lg text-white"
                      >
                        Add floor
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-white mb-2 block">Photo</label>
                  <div className="py-3 px-5 w-full rounded-lg border-zinc-800 border-2 border-dashed basis-1/3">
                    <p className="text-zinc-500 flex items-center justify-center space-x-3">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M16.2844 2.44238H8.21552L6.21292 6.06992C5.81681 6.10332 5.42298 6.13746 5.03155 6.17126C3.3578 6.3158 1.97999 7.60537 1.73477 9.26736C1.51261 10.773 1.31247 12.3236 1.31247 13.9073C1.31247 15.491 1.51261 17.0417 1.73477 18.5473C1.97999 20.2093 3.3578 21.4989 5.03155 21.6434C7.43298 21.8509 9.83764 22.0576 12.25 22.0576C14.6623 22.0576 17.067 21.8509 19.4684 21.6434C21.1421 21.4989 22.5199 20.2093 22.7652 18.5473C22.9873 17.0417 23.1875 15.491 23.1875 13.9073C23.1875 12.3236 22.9873 10.773 22.7652 9.26736C22.5199 7.60537 21.1421 6.3158 19.4684 6.17126C19.0746 6.13724 18.6808 6.10313 18.287 6.06992L16.2844 2.44238Z"
                            stroke="#62D9FF"
                            strokeWidth="2.62497"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 16.9755C14.1302 16.9755 15.8571 15.2486 15.8571 13.1184C15.8571 10.9881 14.1302 9.26123 12 9.26123C9.86976 9.26123 8.14286 10.9881 8.14286 13.1184C8.14286 15.2486 9.86976 16.9755 12 16.9755Z"
                            stroke="#62D9FF"
                            strokeWidth="2.62497"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>Upload your photo here</span>
                    </p>
                  </div>
                  <input className="hidden"></input>
                </div>
              </div>
            </div>
            {/* STEP 3 */}
            <div
              className={`px-10 mb-10 space-x-10 ${step === 3 ? "" : "hidden"}`}
            >
              <div className="flex flex-row items-center justify-center mb-10">
                <div>
                  <img
                    className="mr-2"
                    src="/images/ktp-1.png"
                    alt="KTP"
                    width={250}
                    height={250}
                  />
                </div>
                <div>
                  <img
                    className="mr-2"
                    src="/images/ktp-2.png"
                    alt="KTP"
                    width={250}
                    height={250}
                  />
                </div>
                <div>
                  <img
                    className="mr-2"
                    src="/images/ktp-3.png"
                    alt="KTP"
                    width={250}
                    height={250}
                  />
                </div>
              </div>
              <div>
                <div className="py-3 px-5 w-full rounded-lg border-zinc-800 border-2 border-dashed space-y-5 flex flex-col justify-center items-center">
                  <div>
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="80"
                        height="80"
                        rx="40"
                        fill="#62D9FF"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M45.2694 27.1899H34.7305L32.1148 31.928C31.5975 31.9716 31.0831 32.0162 30.5718 32.0603C28.3857 32.2491 26.5861 33.9334 26.2658 36.1042C25.9756 38.0708 25.7142 40.0961 25.7142 42.1646C25.7142 44.2331 25.9756 46.2584 26.2658 48.225C26.5861 50.3957 28.3857 52.0801 30.5718 52.2689C33.7084 52.5398 36.8492 52.8098 39.9999 52.8098C43.1507 52.8098 46.2915 52.5398 49.4281 52.2689C51.6142 52.0801 53.4138 50.3957 53.7341 48.225C54.0242 46.2584 54.2857 44.2331 54.2857 42.1646C54.2857 40.0961 54.0242 38.0708 53.7341 36.1042C53.4138 33.9334 51.6142 32.2491 49.4281 32.0603C48.9138 32.0159 48.3995 31.9713 47.8851 31.9279L45.2694 27.1899Z"
                        stroke="#62D9FF"
                        strokeWidth="3.42853"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40 46.6339C42.8404 46.6339 45.1429 44.3313 45.1429 41.491C45.1429 38.6507 42.8404 36.3481 40 36.3481C37.1597 36.3481 34.8572 38.6507 34.8572 41.491C34.8572 44.3313 37.1597 46.6339 40 46.6339Z"
                        stroke="#62D9FF"
                        strokeWidth="3.42853"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-zinc-500 text-center">
                    Upload your e-KTP here
                    <br />
                    (.png / .pdf)
                  </p>
                </div>
                <input className="hidden"></input>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between my-10">
            <button
              onClick={() => handleBack()}
              className="px-5 py-3 rounded-lg flex flex-row items-center font-bold text-white"
            >
              <span className="bg-white rounded-full p-0.5 mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M13.293 18.207L7.58603 12.5L13.293 6.79297L14.707 8.20697L10.414 12.5L14.707 16.793L13.293 18.207Z"
                    fill="#2E2E48"
                  />
                </svg>
              </span>
              Back to Home
            </button>
            <button
              onClick={() => handleNext()}
              className="bg-gradient-to-r from-cyan-400 to-orange-400 px-5 py-3 rounded-lg flex flex-row items-center"
            >
              Next Step{" "}
              <img
                className="ml-5"
                src="/svg/arrow-btn-dark.svg"
                width={50}
                height={10}
                alt="Line"
              />{" "}
            </button>
          </div>
        </div>
      </article>
      <div className="fixed z-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1352"
          height="990"
          viewBox="0 0 1352 990"
          fill="none"
        >
          <g filter="url(#filter0_f_62_3516)">
            <path
              d="M431.333 862.685C684.293 746.314 657.57 981.129 643.158 1084.56L-56.4535 1074C-70.4072 936.891 -5.06037 689.233 77.065 701.312C287.482 732.26 204.925 966.841 431.333 862.685Z"
              fill="#007397"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_62_3516"
              x="-758.34"
              y="0.88623"
              width="2110.12"
              height="1783.67"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="350"
                result="effect1_foregroundBlur_62_3516"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </main>
  );
}
