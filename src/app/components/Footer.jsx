import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          src="/images/logo-image.png"
          alt="Logo Image"
          className=" bg-[#ADB7BE] rounded-full mb-10 px-4 py-4"
          width={80}
          height={80}
        />

        <p className="text-slate-600 justify-center place-content-center">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
