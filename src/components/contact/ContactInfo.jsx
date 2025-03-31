import React from "react";
import SingleInfo from "./SingleInfo";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="santosha1404@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7022590204" Image={FiPhone} />
      <SingleInfo text="Bangalore, Karnataka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
