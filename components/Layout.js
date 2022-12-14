import Head from "next/head";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "./Navbar";

function Layout(props) {
  const { authIsReady } = useAuthContext();

  return (
    <>
      <Head>
        <title>Image Uploader</title>
        <meta
          name="description"
          content="Upload your images and get your images url"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {authIsReady && (
        <>
          <Navbar />
          <main className="relative min-h-[80%]">{props.children}</main>
          <footer className="absolute bottom-0 inset-x-0 mx-auto text-center my-4">
            <p className="text-[14px] font-montserrat font-medium">
              created by <strong className="font-bold">albert</strong>-
              devChallenges.io
            </p>
          </footer>
        </>
      )}
    </>
  );
}

export default Layout;
