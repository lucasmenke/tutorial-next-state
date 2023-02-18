"use client";

import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function OverlayParent() {
  const [showSidebar, setShowSidebar] = useState(true);
  function changeShowSidebar() {
    showSidebar ? setShowSidebar(false) : setShowSidebar(true);
  }

  return (
    <div>
        <Navbar toggle={showSidebar} changeShowSidebar={changeShowSidebar} />
        <Sidebar toggle={showSidebar} />
    </div>
  );
}
