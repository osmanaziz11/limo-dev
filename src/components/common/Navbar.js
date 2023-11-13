/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import * as fonts from "@/util/fonts";
import { usePathname } from "next/navigation";

const NavLink = ({ name, href }) => {
  const activeRoute = usePathname();
  const isActive = activeRoute === href || false;
  return (
    <li
      key={name}
      className={`mx-5  cursor-pointer border-b-2  pb-2 text-white  transition-all  hover:border-active_navbar  ${
        isActive ? "border-active_navbar" : "border-[transparent]"
      }`}
    >
      <Link href={href}>
        <h6
          className={`text-[12px] tracking-[1.5px] xxlg:text-[18px]  ${fonts.montserrat500}`}
          href={href}
        >
          {name}
        </h6>
      </Link>
    </li>
  );
};

function NavLinks() {
  const routes = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "EVENTS", href: "/events" },
    { name: "OUR FLEET", href: "/ourfleet" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <ul className=" mt-[20px] hidden w-[700px] justify-end lg:flex xxlg:w-auto">
      {routes.map((route) => {
        return <NavLink key={route.name} {...route} />;
      })}
    </ul>
  );
}

export default function Navbar() {
  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-2 py-3 xxs:px-4 sm:px-5 sm:py-5 md:py-7 xxlg:px-7 ">
      <div className="">
        <img
          src="/images/Logo.png"
          alt="Logo"
          className="w-[128px] xxs:w-40 sm:w-44 xxlg:w-64"
        />
      </div>
      <div className="flex w-auto justify-end lg:w-[70%] xxlg:w-[75%]">
        <NavLinks />
      </div>
      <div className="">
        <button
          className={`hidden bg-crimson px-4 py-[15px] text-xs uppercase  text-white lg:block xxlg:px-8 xxlg:py-[20px] xxlg:text-base ${fonts.montserrat600}`}
        >
          <Link href="/reservation"> Reservations</Link>
        </button>
      </div>
    </div>
  );
}
