/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import * as fonts from "@/util/fonts";
import { usePathname } from "next/navigation";
import { Rotate as Hamburger } from "hamburger-react";

const NavLink = ({ name, href, horizontal, handler }) => {
  const activeRoute = usePathname();
  const isActive = activeRoute === href || false;
  return (
    <li
      key={name}
      className={`mx-5 ${
        !horizontal && "my-3"
      }  cursor-pointer border-b-2  pb-2 text-white  transition-all  hover:border-active_navbar  ${
        isActive ? "border-active_navbar" : "border-[transparent]"
      }`}
    >
      <Link href={href}>
        <h6
          className={`text-[20px] tracking-[1.5px] lg:text-[12px] xxlg:text-[18px]  ${fonts.montserrat500}`}
          href={href}
          onClick={() => (horizontal ? undefined : handler(false))}
        >
          {name}
        </h6>
      </Link>
    </li>
  );
};

function NavLinks({ horizontal = true, handler }) {
  const routes = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "EVENTS", href: "/events" },
    { name: "OUR FLEET", href: "/ourfleet" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: "/." },
  ];

  const containerClasses = horizontal
    ? "mt-[20px] hidden w-[700px] justify-end lg:flex xxlg:w-auto"
    : "mt-[20px] flex h-full w-full flex-col items-center justify-center";
  return (
    <ul className={containerClasses}>
      {routes.map((route) => {
        return (
          <NavLink
            key={route.name}
            {...route}
            horizontal={horizontal}
            handler={handler}
          />
        );
      })}
    </ul>
  );
}

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  function SideMenu() {
    return (
      <div className={`fixed left-0 top-0 z-[10] h-screen w-screen bg-black transition-all ${menu ? 'opacity-95 visible' : 'opacity-0 hidden'}`}>
        <NavLinks horizontal={false} handler={setMenu} />
      </div>
    );
  }

  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-2 py-3 xxs:px-4 sm:px-5 sm:py-5 md:py-7 xxlg:px-7 ">
     <SideMenu />
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
      <div className="absolute right-0 z-50 block outline-none lg:hidden">
        <Hamburger
          id="hamburger"
          color="white"
          toggled={!menu ? false : true}
          size={30}
          distance="sm"
          easing="ease-in"
          hideOutline={true}
          rounded
          onToggle={() => setMenu(!menu)}
        ></Hamburger>
      </div>
    </div>
  );
}
