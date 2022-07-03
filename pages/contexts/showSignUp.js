import { createContext, useState } from "react";

export const ShowSignUp = createContext();

const ShowSignUpProvider = (props) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const handleShowSignUp = () => setShowSignUpModal(true);
  const handleCloseSignUp = () => setShowSignUpModal(false);

  return (
    <ShowSignUp.Provider
      value={{ handleShowSignUp, showSignUpModal, handleCloseSignUp }}
    >
      {props.children}
    </ShowSignUp.Provider>
  );
};

export default ShowSignUpProvider;
