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
    <header className="fixed top-0 right-0 left-0 z-50 flex h-24 items-center justify-center bg-transparent backdrop-blur-sm max-[1200px]:backdrop-blur-none">
      <Logo />
      {/* Prevent initial flash of wrong header loaded */}
      {isMounted ? (
        width >= 1200 ? (
          <NavBar />
        ) : (
          <Menu />
        )
      ) : (
        <div className="flex-1" />
      )}
    </header>
  );
}

export default Header;
