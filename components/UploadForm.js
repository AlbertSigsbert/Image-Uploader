import Image from "next/image";
import SampleImg from "../public/image.svg";

function UploadForm(props) {
  return (
    <section className="grid place-items-center min-h-[80vh]">
      <div className="p-4 sm:p-6 md:p-8 w-80 md:w-[402px] max-w-md max-h-[470px] bg-white rounded-lg shadow-custom">
        <h1 className="text-center text-[#4F4F4F] font-poppins font-medium text-lg">
          Upload your image
        </h1>
        <p className="text-center text-[#828282] font-poppins font-medium text-[10px] my-4">
          File should be Jpeg, Png,...
        </p>
        <div className="relative border border-dashed border-[#97BEF4] bg-[#F6F8FB] max-w-96 h-[219px]">
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

        <form className="flex justify-center space-y-6" action="#">
          <button
            type="submit"
            className="font-noto font-medium text-[12px] text-white bg-[#2F80ED] rounded-lg p-2.5"
          >
            Choose a file
          </button>
        </form>
      </div>
    </section>
  );
}

export default UploadForm;
