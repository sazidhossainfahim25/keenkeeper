"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-semibold rounded-sm transition-all
        px-2 py-1 text-green-800
        lg:border lg:border-[#92d5bf] lg:py-2 lg:px-3
        ${isActive ? "bg-green-700 text-white lg:border-green-700" : ""}`}
    >
      {children}
    </Link>
  );
};

export default MyLink;