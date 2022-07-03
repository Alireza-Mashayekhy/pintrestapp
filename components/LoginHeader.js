import Image from "next/image";
import HeaderStyle from "../styles/loginHeader.module.css";
import Link from "next/link";
import { useContext } from "react";
import { ShowSignUp } from "../pages/contexts/showSignUp";
import SignUpModal from "./SignUpModal";
import LogInModal from "./LogInModal";
import { ShowLogIn } from "../pages/contexts/showLogIn";

function LoginHeader() {
  const { handleShowSignUp } = useContext(ShowSignUp);
  const { handleShowLogIn } = useContext(ShowLogIn);
  return (
    <div className={HeaderStyle.header}>
      <div className={HeaderStyle.headerLeft}>
        <Image src="/pintrestIcon2.png" width={30} height={30} />
        <div>Pinterest</div>
      </div>
      <div className={HeaderStyle.headerRhite}>
        <Link href="/">
          <div className={HeaderStyle.Link}>About</div>
        </Link>
        <Link href="/">
          <div className={HeaderStyle.Link}>business</div>
        </Link>
        <Link href="/">
          <div className={HeaderStyle.Link}>Blog</div>
        </Link>
        <div>
          <button className={HeaderStyle.LogButton} onClick={handleShowLogIn}>
            Log in
          </button>
          <LogInModal />
          <button className={HeaderStyle.SignButton} onClick={handleShowSignUp}>
            Sign up
          </button>
          <SignUpModal />
        </div>
      </div>
    </div>
  );
}

export default LoginHeader;
