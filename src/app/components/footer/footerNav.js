"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function FooterNav() {
  const pathName = usePathname();

  return (
    <>
      <nav className="flex flex-col gap-8 text-sm font-black md:flex-row md:text-lg ">
        <Link
          href="/"
          className={`${
            pathName === "/" ? "text-[#D88506]" : "text-white"
          } transition-colors duration-200 hover:text-[#D88506]`}
        >
          Inicio
        </Link>
        <Link
          href="/nosotros"
          className={`${
            pathName === "/nosotros" ? "text-[#D88506]" : "text-white"
          } transition-colors duration-300 hover:text-[#D88506]`}
        >
          Nosotros
        </Link>
        <Link
          href="/tienda"
          className={`${
            pathName === "/tienda" ? "text-[#D88506]" : "text-white"
          } transition-colors duration-200 hover:text-[#D88506]`}
        >
          Tienda
        </Link>
        <Link
          href="/blog"
          className={`${
            pathName === "/blog" ? "text-[#D88506]" : "text-white"
          } transition-colors duration-200 hover:text-[#D88506]`}
        >
          Blog
        </Link>
      </nav>
      <p className="text-sm text-white">
        ©Alberto Sánchez - Todos los derechos reservados.
      </p>
    </>
  );
}

export default FooterNav;
