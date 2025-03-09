"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const OpenNavHndler = () => setShowNav(true);
  const CloseNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={OpenNavHndler} />
      <MobileNav showNav={showNav} closeNav={CloseNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
