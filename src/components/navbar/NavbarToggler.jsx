import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../state/menuSlice";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      className="text-1xl p-3 text-center border border-orange rounded-full"
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
