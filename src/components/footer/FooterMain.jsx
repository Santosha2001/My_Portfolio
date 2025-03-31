import React from "react";
import ContactSocial from "../contact/ContactSocial";

const FooterMain = () => {
  return (
    <div className="px-4 text-center mt-20">
      {/* Divider */}
      <div className="w-full h-[1px] bg-cyan mb-8"></div>

      {/* Name */}
      <p className="text-2xl text-cyan mb-4">Santosh C</p>

      {/* Copyright */}
      <p className="text-sm text-cyan mb-4">
        © 2025 Santosha | All Rights Reserved.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mb-5">
        <ContactSocial />
      </div>
    </div>
  );
};

export default FooterMain;
