import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import Image from "next/image";
import SimpleReactValidator from "simple-react-validator";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import loginBodyStyle from "../styles/loginBodyStyle.module.css";
import Link from "next/link";

function FifthLogPage() {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpAge, setSignUpAge] = useState("");
  const [, forceUpdate] = useState();
  const router = useRouter();

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
  };

  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    const user = {
      signUpEmail,
      signUpPassword,
      signUpAge,
    };
    const firebaseConfig = {
      databaseURL: "https://pinterest-5b417-default-rtdb.firebaseio.com",
    };

    try {
      if (validator.current.allValid()) {
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        const userId = user.signUpEmail.split("@")[0];
        const starCountRef = ref(database, "users/" + userId);
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          if (data !== null && data.email === user.email) {
            alert("exist");
          } else {
            set(ref(database, "users/" + userId), {
              username: userId,
              email: user.signUpEmail,
              password: user.signUpPassword,
              Age: user.signUpAge,
            });
            reset();
            router.push("/");
          }
        });
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      alert("error");
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
