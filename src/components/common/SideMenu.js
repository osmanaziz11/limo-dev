import { montserrat500 } from "@/util/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ name, href }) => {
  const activeRoute = usePathname();

  const isActive = activeRoute === href || false;
  return (
    <li
      key={name}
      className={`mx-5 my-4  cursor-pointer border-b-2  pb-2 text-white  transition-all  hover:border-active_navbar  ${
        isActive ? "border-active_navbar" : "border-[transparent]"
      }`}
    >
      <Link href={href}>
        <h6
          className={`text-[30px] tracking-[1.5px]  ${montserrat500}`}
          href={href}
        >
          {name}
        </h6>
      </Link>
    </li>
  );
};

function SideMenu() {
  const routes = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "EVENTS", href: "/events" },
    { name: "OUR FLEET", href: "/ourfleet" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-screen bg-black opacity-90">
      <ul className=" mt-[20px]  flex h-full flex-col items-center justify-center w-full ">
        {routes.map((route) => {
          return <NavLink key={route.name} {...route} />;
        })}
      </ul>
    </div>
  );
}

export default SideMenu;
