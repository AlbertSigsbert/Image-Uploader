

import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useUpload = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);


  useEffect(() => {
    if (file) {
      // const storageRef = storage.ref(file.name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef,file);


       uploadTask.on("state_changed", (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      }, (err) => {
          setError(err);
      }, async () => {
         const url = await getDownloadURL(uploadTask.snapshot.ref);
         setUrl(url);
      });
    }
   
  }, [file]);

  return { progress, error, url };
}

export default useUpload;

