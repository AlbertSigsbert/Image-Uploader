import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import RegisterForm from "../components/RegisterForm";

function Register(props) {
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
      <RegisterForm />
    </div>
  );
}

export default Register;
