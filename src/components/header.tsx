"use client";

import Logo from "./logo";
import Menu from "./menu";
import NavBar from "./nav-bar";
import useDimension from "@/hooks/use-dimension";

function Header() {
  const { width } = useDimension();

  return (
    <>
      <header className="flex items-center justify-center top-0 bg-transparent h-24 sticky w-full max-[1200px]:backdrop-blur-none backdrop-blur-sm z-99">
        <Logo />
        {width > 1200 ? <NavBar /> : <Menu />}
      </header>
    </>
  );
}

export default Header;
