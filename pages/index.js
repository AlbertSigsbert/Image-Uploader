import { UploadContextProvider } from "../context/UploadContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Home from "../components/Home";

export default function HomePage() {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }
  return (
    <>
      <UploadContextProvider>
        <Home />
      </UploadContextProvider>
    </>
  );
}
