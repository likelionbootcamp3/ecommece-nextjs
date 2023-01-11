import Link from "next/link";
import Container from "../../general/Container";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import Badge from "../../display/Badge";
import { useState } from "react";
import Drawer from "../../feedback/Drawer";
import Brand from "../../navigation/Brand";

const navList = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Shop",
    path: "/shop",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Pages",
    path: "/pages",
  },
];

const NavbarLight = () => {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  return (
    <div className="relative bg-white">
      <Container fluid>
        {/* Inner layout */}
        <div className="flex items-center justify-between pt-3 pb-2 lg:gap-10">
          {/* Navbar Brand */}
          <Brand />

          {/* Navbar Nav */}
          <div className="flex items-center justify-between lg:flex-grow">
            {/* Left */}
            <ul className="items-center hidden gap-5 lg:flex">
              {navList.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>

            {/* Right */}
            <ul className="flex items-center">
              <li className="hidden p-3 lg:block">
                <Link href="/login" className="flex items-center gap-1.5">
                  <AiOutlineUser size={24} />
                  <span>Login / Register</span>
                </Link>
              </li>
              <li className="p-3">
                <Link href="/login" className="flex items-center gap-1.5">
                  <AiOutlineSearch size={24} />
                </Link>
              </li>
              <li className="p-3">
                <Badge count={3}>
                  <Link href="/login" className="flex items-center gap-1.5">
                    <AiOutlineShoppingCart size={24} />
                  </Link>
                </Badge>
              </li>
              <li className="hidden p-3 lg:block">
                <Badge count={3}>
                  <Link href="/login" className="flex items-center gap-1.5">
                    <AiOutlineHeart size={24} />
                  </Link>
                </Badge>
              </li>
              <li className="p-3 lg:hidden">
                <button
                  className="flex items-center gap-1.5"
                  onClick={() => setIsNavDrawerOpen(true)}
                >
                  <BiMenuAltRight size={24} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* NavList Drawer */}
      <Drawer
        isOpen={isNavDrawerOpen}
        onClose={() => setIsNavDrawerOpen(false)}
        closable={true}
      >
        <div className="flex items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-6">
            {navList.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="text-2xl">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default NavbarLight;
