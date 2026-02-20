import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Param Mahajan</div>

      <div className={`links ${open ? "active" : ""}`}>
        <a href="#hero" onClick={() => setOpen(false)}>Home</a>
        <a href="#journey" onClick={() => setOpen(false)}>Journey</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#connect" onClick={() => setOpen(false)}>Connect</a>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}
