import loginBodyStyle from "../styles/loginBodyStyle.module.css";
import { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import Image from "next/image";
import Link from "next/link";

function FifthLogPage() {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpAge, setSignUpAge] = useState("");
  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "required",
        min: "this should be more than 8 char",
        email: "please use a correct email address",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );

  const reset = () => {
    setSignUpEmail("");
    setSignUpPassword("");
    setSignUpAge("");
    setLoginPassword("");
    setLoginEmail("");
  };

  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    const user = {
      signUpEmail,
      signUpPassword,
      signUpAge,
    };
    try {
      if (validator.current.allValid()) {
        fetch("", {
          method: "POST",
          body: JSON.stringify(user),
        });
        reset();
      } else {
        validator.current.showMessage();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <>
      <div className={loginBodyStyle.fifthLogPage}>
        <div className={loginBodyStyle.fifthPageText}>
          <div>Sign up to get your ideas</div>
        </div>
        <div className={loginBodyStyle.fifthPageRhite}>
          <div className={loginBodyStyle.fifthPageForm}>
            <Image src="/pintrestIcon2.png" width={40} height={40} />
            <p>Welcome to Pinterest</p>
            <form onSubmit={handleSubmitSignUp}>
              <div>
                <label style={{ paddingLeft: "10px" }} for="email">
                  email
                </label>
                <br />
                <input
                  id="email"
                  type="email"
                  name="signUpEmail"
                  placeholder="email"
                  value={signUpEmail}
                  onChange={(e) => {
                    setSignUpEmail(e.target.value);
                    validator.current.showMessageFor("signUpEmail");
                  }}
                />
                {validator.current.message(
                  "signUpEmail",
                  signUpEmail,
                  "required|email"
                )}
              </div>
              <div>
                <label style={{ paddingLeft: "10px" }} for="password">
                  password
                </label>
                <br />
                <input
                  id="password"
                  type="password"
                  name="signUpPassword"
                  placeholder="Create a password"
                  value={signUpPassword}
                  onChange={(e) => {
                    setSignUpPassword(e.target.value);
                    validator.current.showMessageFor("signUpPassword");
                  }}
                />
                {validator.current.message(
                  "signUpPassword",
                  signUpPassword,
                  "required|min:8"
                )}
              </div>
              <div>
                <label style={{ paddingLeft: "10px" }} for="Age">
                  Age
                </label>
                <br />
                <input
                  id="Age"
                  type="number"
                  name="signUpAge"
                  placeholder="Age"
                  value={signUpAge}
                  onChange={(e) => {
                    setSignUpAge(e.target.value);
                    validator.current.showMessageFor("signUpAge");
                  }}
                />
                {validator.current.message("signUpAge", signUpAge, "required")}
              </div>
              <button type="submit">Countinue</button>
            </form>
          </div>
        </div>
      </div>
      <div className={loginBodyStyle.fifthLogPageFooter}>
        <div>
          <Link href={"/"}>Terms of Service</Link>
        </div>
        <div>
          <Link href={"/"}>Privacy Poblicy</Link>
        </div>
        <div>
          <Link href={"/"}>Help</Link>
        </div>
        <div>
          <Link href={"/"}>Iphon App</Link>
        </div>
        <div>
          <Link href={"/"}>Android App</Link>
        </div>
        <div>
          <Link href={"/"}>Users</Link>
        </div>
        <div>
          <Link href={"/"}>Colloctions</Link>
        </div>
        <div>
          <Link href={"/"}>Today</Link>
        </div>
        <div>
          <Link href={"/"}>Exolore</Link>
        </div>
      </div>
    </>
  );
}

export default FifthLogPage;
