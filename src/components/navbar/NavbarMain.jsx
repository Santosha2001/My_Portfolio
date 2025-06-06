import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { useSelector } from "react-redux";
import NavbarToggler from "./NavbarToggler";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] sm:h-16 lg:h-20">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <div className="flex items-center gap-4">
          <NavbarBtn />
          <div className="lg:hidden">
            <NavbarToggler />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
