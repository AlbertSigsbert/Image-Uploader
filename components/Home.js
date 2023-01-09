//Components
import UploadForm from "./UploadForm";
import Loading from "./Loading";
import Success from "./Success";


//Hooks
import { useUploadContext } from "../hooks/useUploadContext";

function Home(props) {
  const { progress, url } = useUploadContext();

  return (
    <>
      {!progress && <UploadForm />}
      {progress && !url && <Loading />}
      {url && <Success />}
    </>
  );
}

export default Home;
