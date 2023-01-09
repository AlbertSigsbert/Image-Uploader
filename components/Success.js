import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useUploadContext } from "../hooks/useUploadContext";

function Success(props) {
  const [isCopied, setIsCopied] = useState(false);
  const { url, dispatch } = useUploadContext();

  const urlInput = useRef();

  const copyText = async () => {
    try {
      const clipboardTxt = urlInput.current.textContent;

      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(clipboardTxt);
      }

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="grid place-items-center min-h-[80vh]">
      <div className="p-4 sm:p-6 md:p-8 w-80 md:w-[401px] max-w-md bg-white rounded-xl shadow-custom">
        {/* Success Icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#219653"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="#ffffff"
          className="w-12 h-12 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1 className="font-poppins font-medium text-center text-lg leading-[27px] tracking-[-0.035em] text-[#4F4F4F]">
          Uploaded Successfully!
        </h1>

        {/* Uploaded Image */}
        <div className="relative w-60 h-40 md:w-[338px] md:h-[224.4px] my-6 mx-auto">
          <Image
            src={url}
            alt="UploadedImage"
            fill
            className="object-contain rounded-xl"
            priority
          />
        </div>

        {/* Uploaded Image URL */}
        <div className="h-[34px] max-w-[240px]  md:max-w-[338px] mx-auto bg-[#F6F8FB] border border-solid border-[#E0E0E0] rounded-lg relative">
          <p
            className="absolute w-60 truncate left-0 p-2 font-poppins font-medium text-[#4F4F4F] text-[8px] leading-3 tracking-[-0.035em] text-center"
            ref={urlInput}
          >
            {url}
          </p>
          <button
            onClick={copyText}
            className="absolute right-0 px-2 md:px-4 py-0.5 h-[30px] bg-[#2F80ED] rounded-lg font-poppins font-medium text-white text-[8px] leading-3 tracking-[-0.035em] text-center"
          >
            {isCopied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </div>

      <div className="my-4">
        <Link href="/" onClick={() => dispatch({type:"RESET"})} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Home</Link>
      </div>
    </section>
  );
}

export default Success;
