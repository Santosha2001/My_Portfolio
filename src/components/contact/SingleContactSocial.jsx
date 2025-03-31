import React from "react";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-10 w-10 border border-cyan text-cyan rounded-full p-3 flex items-center justify-center ">
      <a href={link} className="cursor-pointer" target="_blank">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
