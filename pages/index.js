import Home from "../components/Home";
import { UploadContextProvider } from "../context/UploadContext";
export default function HomePage() {
  return <>
    <UploadContextProvider>
      <Home/>
    </UploadContextProvider>
  </>
}
