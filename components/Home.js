import { useState } from "react";
import { UploadContext } from "../context/UploadContext";
import useUpload from "../hooks/useUpload";

//Components
import UploadForm from "./UploadForm";
import Loading from "./Loading";
import Success from "./Success";

function Home(props) {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { progress, url } = useUpload(file);

  return (
    <UploadContext.Provider
      value={{
        file,
        setFile,
        error,
        setError,
        progress,
        url,
        success,
        setSuccess,
      }}
    >
      { !progress && <UploadForm /> }
      { progress && !success  && <Loading />}
      { success && <Success />}
    
    </UploadContext.Provider>
  );
}

export default Home;
