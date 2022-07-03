import { useContext, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import SimpleReactValidator from "simple-react-validator";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import Image from "next/image";
import HeaderStyle from "../styles/loginHeader.module.css";
import { ShowSignUp } from "../pages/contexts/showSignUp";
import { useRouter } from "next/router";

function SignUpModal() {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpAge, setSignUpAge] = useState("");
  const { showSignUpModal, handleCloseSignUp } = useContext(ShowSignUp);
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
  };
  const router = useRouter();
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
    <div>
      <Modal
        centered
        show={showSignUpModal}
        onHide={handleCloseSignUp}
        contentClassName={HeaderStyle.SignUpModal}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignUpModal;
