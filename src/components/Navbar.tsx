"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="flex items-center py-5 px-10 justify-between w-full lg:px-32">
      <div className="ml-5 md:ml-16 ">
        <Image
          src="/logo.png"
          alt="Logo"
          width={70}
          height={15}
          className="py-3"
        />
      </div>
      <div className="mr-5 md:mr-16 sm:w-[50%]">
        <ul className=" items-center justify-around hidden md:flex">
          <li className="mr-2">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-2">
            <Link href="/">About us</Link>
          </li>
          <li className="mr-2">
            <Link href="/">Products</Link>
          </li>
          <li className="mr-2">
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
        <div
          onClick={() => setSideNav(!sideNav)}
          className="cursor-pointer flex md:hidden"
        >
          <AiOutlineMenu size={30} />
        </div>
        {sideNav ? (
          <div
            className="bg-black/60 fixed w-full h-screen left-0 top-0 z-10"
            onClick={() => setSideNav(!sideNav)}
          ></div>
        ) : (
          ""
        )}
        <div
          className={
            sideNav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 "
              : "fixed top-0 left-[-999px] w-[300px] h-screen bg-white z-10  duration-300 "
          }
        >
          <AiOutlineClose
            onClick={() => setSideNav(!sideNav)}
            size={25}
            className="absolute right-4 top-4 cursor-pointer"
          />

          <nav>
            <ul className=" items-center justify-around my-8 mx-5">
              <li className="text-xl py-4 flex">
                <Link href="/">Home</Link>
              </li>
              <li className="text-xl py-4 flex">
                <Link href="/">About us</Link>
              </li>
              <li className="text-xl py-4 flex">
                <Link href="/">Products</Link>
              </li>
              <li className="text-xl py-4 flex">
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
