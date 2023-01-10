import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

function Navbar(props) {
  const router = useRouter();
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <header className="shadow py-2">
      <nav className="mx-[6%] my-6 flex space-y-4 font-montserrat md:space-y-0 md:flex-row justify-between items-center">
        <Link href="/" className="font-bold">
          Image Uploader
        </Link>
        <ul className="flex space-x-6">
          {!user && 
          (<>
              <li>
                {" "}
                <Link href="/register" className={router.pathname == "/register" ? "font-semibold underline" : ""}>
                  Register
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/login" className={router.pathname == "/login" ? "font-semibold underline" : ""}>
                  Login
                </Link>
              </li>
          </> 
          )}

         {user && (
           <>
            <li className="text-gray-700 text-base font-semibold">
              Hi, {user.displayName}
            </li>
          <li className="text-gray-700 text-base font-semibold">
            <button onClick={logout}>Logout</button>
          </li>
           </>
         )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
