import { createContext, useState } from "react";

export const ShowLogIn = createContext();

const ShowLogInProvider = (props) => {
  const [showLogInModal, setShowLogInModal] = useState(false);
  const handleCloseLogIn = () => setShowLogInModal(false);
  const handleShowLogIn = () => setShowLogInModal(true);
  return (
    <ShowLogIn.Provider
      value={{ handleCloseLogIn, handleShowLogIn, showLogInModal }}
    >
      {props.children}
    </ShowLogIn.Provider>
  );
};

export default ShowLogInProvider;
