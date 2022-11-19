import Image from "next/image";
import { useRef, useState } from "react";
import SampleImg from "../public/image.svg";

function MultipleFiles(props) {
  const [files, setFiles] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    let selectedFiles = Array.from(e.dataTransfer.files);
    if (selectedFiles) {
      imgValidator(selectedFiles);
    }
  };

  const handleChange = (e) => {
    let selectedFiles = Array.from(e.target.files);

    if (selectedFiles) {
      imgValidator(selectedFiles);
    }
  };

  const imgValidator = (files) => {
    let types = [];
    files.forEach((file) => {
      types.push(file.type);
    });

    const str = "image";
    const isImage = types.every((item) => item.includes(str));

    if (isImage) {
      setFiles(files);
      setError(null);
    } else {
      setFiles(null);
      setError("Only image files are accepted.");
    }
  };

  return (
    <section className="grid place-items-center min-h-[80vh]">
      <div className="p-4 sm:p-6 md:p-8 w-80 md:w-[402px] max-w-md max-h-[470px] bg-white rounded-lg shadow-custom">
        <h1 className="text-center text-[#4F4F4F] font-poppins font-medium text-lg">
          Upload your image
        </h1>
        <p className="text-center text-[#828282] font-poppins font-medium text-[10px] my-4">
          File should be Jpeg, Png,...
        </p>

        {!files && (
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="relative border border-dashed border-[#97BEF4] bg-[#F6F8FB] max-w-96 h-[219px]"
          >
            <Image
              src={SampleImg}
              alt="sampleImage"
              priority
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <p className="mt-16 font-poppins text-[10px] md:text-[12px] leading-[18px] tracking-[-0.035em] text-[#BDBDBD] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Drag & Drop your image here
            </p>
          </div>
        )}
        <p className="font-poppins text-xs text-center text-[#BDBDBD] my-4">
          Or
        </p>

        <form
          className="flex justify-center space-y-6"
          action="#"
          encType="multipart/form-data"
        >
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleChange}
            hidden
            ref={inputRef}
          />
          <button
            onClick={() => inputRef.current.click()}
            className="font-noto font-medium text-[12px] text-white bg-[#2F80ED] rounded-lg p-2.5"
          >
            Choose a file
          </button>
        </form>
      </div>
      {error && (
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <span className="font-medium">Error! </span>
          {error}
        </div>
      )}
    </section>
  );
}

export default MultipleFiles;
