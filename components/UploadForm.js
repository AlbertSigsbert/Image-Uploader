import Image from "next/image";
import { useContext, useRef } from "react";
import { UploadContext } from "../context/UploadContext";
import SampleImg from "../public/image.svg";

function UploadForm(props) {
  const { setFile, error, setError } = useContext(UploadContext);

  const inputRef = useRef();

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    let selectedFile = e.dataTransfer.files[0];
    if (selectedFile) {
      imgValidator(selectedFile);
    }
  };

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      imgValidator(selectedFile);
    }
  };

  const imgValidator = (file) => {
    const str = "image";
    const isImage = file.type.includes(str);

    if (isImage) {
      setFile(file);
      setError(null);
    } else {
      setFile(null);
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

        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={error ? { borderColor: "red" } : { borderColor: "#97BEF4" }}
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

export default UploadForm;
