import { useState, useRef } from "react";
import Image from "next/image";
import SampleImg from "../public/image.svg";
import useStorage from "../hooks/useStorage";
import { useUploadContext } from "../hooks/useUploadContext";

function UploadForm(props) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { upload } = useStorage();
  const {isPending} = useUploadContext();

  const inputRef = useRef();

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    let selected = e.dataTransfer.files[0];
    if (selected && selected.type.includes("image")) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Select an image file");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    let selected = e.target.files[0];

    if (selected && selected.type.includes("image")) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Select an image file");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    upload(file);

    setFile(null);
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

        <form onSubmit={handleSubmit}>
          {!file && (
            <div
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              style={
                error ? { borderColor: "red" } : { borderColor: "#97BEF4" }
              }
              className="relative border border-dashed bg-[#F6F8FB] max-w-96 h-[219px]"
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
          {file && (
            <div
              className="p-4 my-16 w-full text-center font-montserrat text-green-700 bg-green-100 rounded-lg"
              role="alert"
            >
              <span className="font-medium text-center">Success! </span>
              <p>Image uploaded successfully</p>
              <p>Tap submit to proceed</p>
            </div>
          )}

          {!file && (
            <p className="font-poppins text-xs text-center text-[#BDBDBD] my-4">
              Or
            </p>
          )}

          <div className="flex justify-center space-y-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              hidden
              ref={inputRef}
            />
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => inputRef.current.click()}
                className="font-noto font-medium text-[12px] text-white bg-[#2F80ED] rounded-lg p-2.5"
              >
                Choose a file
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </div>
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

export default UploadForm;
