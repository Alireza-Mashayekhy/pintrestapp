import { useContext, useState } from "react";
import Image from "next/image";
import { ForSearchClick } from "../pages/contexts/forSearchClick";
import headerStyle from "../styles/headerStyle.module.css";
import Search from "./Search";
import { Modal } from "react-bootstrap";

export default function Header({ photoes }) {
  const { closeSearch } = useContext(ForSearchClick);
  const { openSearch } = useContext(ForSearchClick);
  const [showModal, setShowModal] = useState(false);

  const handleSHowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const userEmail = localStorage.getItem("email");

  return (
    <div className={headerStyle.header} onClick={closeSearch}>
      <div className={headerStyle.pintrestIcon}>
        <Image src="/pintrestIcon.png" width={25} height={25} />
      </div>
      <button className={headerStyle.homeButton}>Home</button>
      <Search onClick={openSearch} photoes={photoes} />
      <div className={headerStyle.headerRight}>
        <div className={headerStyle.alertIcon}>
          <Image src="/alertIcon.png" width={25} height={25} />
        </div>
        <div className={headerStyle.messageIcon}>
          <Image src="/messageIcon.png" width={25} height={25} />
        </div>
        <div className={headerStyle.profIcon}>
          <span></span>
        </div>
        <div className={headerStyle.menu}>
          <Image
            src="/downArrow.png"
            width={25}
            height={25}
            onClick={handleSHowModal}
          />
          <Modal
            className="openMenu"
            show={showModal}
            onHide={handleCloseModal}
            backdropClassName={headerStyle.backdrop}
            dialogClassName={headerStyle.menuDialog}
          >
            <Modal.Body className={headerStyle.menuModalBody}>
              <p>Your accounts</p>
              {/* <div>{userEmail}</div> */}
              <div>Add accounts</div>
              <div>Convert to business</div>
              <p className={headerStyle.moreOp}>More option</p>
              <div>Setting</div>
              <div>Tune your home feed</div>
              <div>Install the Windows app</div>
              <div>Get help</div>
              <div>See terms and privacy</div>
              <div>Log out</div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}
