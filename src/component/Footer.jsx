import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-[#244D3F]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <Image
          src="/KeenKeeper-footer.png"
          alt="logo"
          width={160}
          height={160}
          className="w-40 py-8 md:w-60 md:py-6 object-contain"
        />
        <p className="text-sm md:text-base lg:max-w-full text-white opacity-80 max-w-md md:max-w-xl text-center md:text-left">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="social-icon text-center">
          <span className="text-[20px] font-semibold text-white py-2 ">
            Social Links
          </span>
          <div className="flex justify-center items-center gap-2 py-3 ">
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center  cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">
              <BiLogoInstagramAlt className="text-2xl" />
            </span>
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center  cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">
              <FaFacebook className="text-2xl" />
            </span>
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center  cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">
              <FaXTwitter className="text-2xl" />
            </span>
          </div>

          <div className="divider"></div>
          <div className="copywrite lg:flex justify-between items-center gap-10 lg:py-8 py-3">
            <div>
              <h4 className="text-white text-[16px] opacity-50">© 2026 KeenKeeper. All rights reserved.</h4>
            </div>
            <div className=" text-white text-[16px] opacity-50 lg:flex justify-between items-center gap-4">
              <span>Privacy Policy </span>
              <span> Terms of Service </span>
              <span> Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
