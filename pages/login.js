import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginForm from "../components/LoginForm";

function Login(props) {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  if (user) {
    return null;
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;
