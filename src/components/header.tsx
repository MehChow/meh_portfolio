"use client";

import { useEffect, useState } from "react";
import Logo from "./logo";
import Menu from "./menu";
import NavBar from "./nav-bar";
import useDimension from "@/hooks/use-dimension";

function Header() {
  const { width } = useDimension();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="flex items-center justify-center top-0 left-0 right-0 h-24 fixed max-[1200px]:backdrop-blur-none backdrop-blur-sm z-50 bg-transparent">
      <Logo />
      {/* Prevent initial flash of wrong header loaded */}
      {isMounted ? width > 1200 ? <NavBar /> : <Menu /> : <div className="flex-1" />}
    </header>
  );
}

export default Header;
