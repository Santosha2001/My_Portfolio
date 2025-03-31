import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/santosha-c-/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/Santosha2001"
        Icon={FiGithub}
      />
      <SingleContactSocial link="#" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
