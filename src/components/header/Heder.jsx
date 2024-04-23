import { useRef, useState } from "react";

import logo from "../img/logo.png";

import "./Header.scss";

import Menu from "./menu/Menu";
import acc from '../img/account.png'
import Modal from "../Modal"
import Login from "../userAccess/Login";


const Header = (props) => {
  const [userLogin,setUserLogin]=useState(true)
  const modalRef = useRef();
  const handleOpenModal = () => {
    modalRef.current.open();
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <img src={logo} alt="logo Path to IT" />
        </div>
        <Menu />
        <button onClick={handleOpenModal} className="header__account"><img src={acc} alt="account"/></button>
        <Modal ref={modalRef}>
        <Login/>
        </Modal>
      </div>
    </header>
  );
};

export default Header;
