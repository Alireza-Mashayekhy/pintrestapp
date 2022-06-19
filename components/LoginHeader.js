import Image from "next/image";
import HeaderStyle from "../styles/loginHeader.module.css";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";

function LoginHeader({ history }) {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpAge, setSignUpAge] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
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

  const handleCloseLogIn = () => setShowLogIn(false);
  const handleShowLogIn = () => setShowLogIn(true);
  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);
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

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const user = { loginEmail, loginPassword };
    try {
      if (validator.current.allValid()) {
        await fetch("", {
          method: "GET",
          body: JSON.stringify(user),
        })
          .json()
          .then((data, status) => {
            if (status === 200) {
              localStorage.setItem("token", data.token);
              history.replace("/homePage");
              reset();
            }
          });
      } else {
        validator.current.showMessage();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

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
          <Modal
            centered
            show={showLogIn}
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
          <button className={HeaderStyle.SignButton} onClick={handleShowSignUp}>
            Sign up
          </button>
          <Modal
            centered
            show={showSignUp}
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
                  {validator.current.message(
                    "signUpAge",
                    signUpAge,
                    "required"
                  )}
                </div>
                <button type="submit">Countinue</button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default LoginHeader;
