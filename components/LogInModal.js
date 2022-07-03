import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { Modal } from "react-bootstrap";
import Image from "next/image";
import SimpleReactValidator from "simple-react-validator";
import { ShowLogIn } from "../pages/contexts/showLogIn";
import { useContext, useRef, useState } from "react";
import HeaderStyle from "../styles/loginHeader.module.css";
import { useRouter } from "next/router";

function LogInModal() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { showLogInModal, handleCloseLogIn } = useContext(ShowLogIn);
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
    setLoginPassword("");
    setLoginEmail("");
  };
  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const user = { loginEmail, loginPassword };
    const firebaseConfig = {
      databaseURL: "https://pinterest-5b417-default-rtdb.firebaseio.com",
    };
    try {
      if (validator.current.allValid()) {
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        const userId = user.loginEmail.split("@")[0];
        const starCountRef = ref(database, "users/" + userId);
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          if (data !== null && data.password === user.loginPassword) {
            reset();
            router.replace("/homePage");
          } else {
            alert("pass or email are false");
          }
        });
      } else {
        validator.current.showMessage();
        forceUpdate(1);
      }
    } catch (ex) {
      alert(ex);
    }
  };
  return (
    <Modal
      centered
      show={showLogInModal}
      onHide={handleCloseLogIn}
      contentClassName={HeaderStyle.LoginModal}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Image src="/pintrestIcon2.png" width={40} height={40} />
        <p>Welcome to Pinterest</p>
        <form onSubmit={handleSubmitLogin}>
          <div>
            <label style={{ paddingLeft: "10px" }} for="email">
              email
            </label>
            <br />
            <input
              id="email"
              type="email"
              name="loginEmail"
              placeholder="email"
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
                validator.current.showMessageFor("loginEmail");
              }}
            />
            {validator.current.message(
              "loginEmail",
              loginEmail,
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
              name="password"
              type="password"
              placeholder="password"
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
                validator.current.showMessageFor("password");
              }}
            />
            {validator.current.message(
              "password",
              loginPassword,
              "required|min:8"
            )}
          </div>
          <button type="submit">Log in</button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default LogInModal;
