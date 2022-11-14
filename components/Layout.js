import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <title>Image Linker</title>
        <meta
          name="description"
          content="Upload your images and get your images url"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-[80%]">{props.children}</main>
      <footer className="absolute bottom-0 inset-x-0 mx-auto text-center my-4">
        <p className="text-[14px] font-montserrat font-medium">created by <strong className="font-bold">albert</strong>- devChallenges.io</p>
      </footer>
    </>
  );
}

export default Layout;
