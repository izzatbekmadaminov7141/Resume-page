/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { NavLink } from "react-router-dom";
// icons
import { FaHome, FaUserGraduate } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineMessage, MdMiscellaneousServices } from "react-icons/md";
import { BsFillPersonDashFill, BsFillPersonCheckFill } from "react-icons/bs";
// Styled
import NavbarStyled from "./NavbarStyled";
import NavbarMedia from "./NavbarMedia";
import { motion } from "framer-motion";
import { useState } from "react";

function navbar() {
  const [hidden, setHidden] = useState(false);
  function handeHidden() {
    setHidden(!hidden);
    const resume = document.querySelector(".resume");
    if (!hidden) {
      resume.classList.add("show");
    } else {
      resume.classList.remove("show");
    }
  }
  return (
    <motion.nav
      animate={{ x: 0, transition: { duration: 1 } }}
      initial={{ x: 500 }}
    >
      <NavbarStyled />
      <NavbarMedia />

      <div className="media">
        <i className="iconResume" onClick={handeHidden}>
          {hidden ? <BsFillPersonCheckFill /> : <BsFillPersonDashFill />}
        </i>
        <NavLink to={"/"}>
          <i className="icon">
            <FaHome />
          </i>
        </NavLink>
        <NavLink to={"/code"}>
          <i className="icon">
            <BiCodeAlt />
          </i>
        </NavLink>
        <NavLink to={"/edu"}>
          <i className="icon">
            <FaUserGraduate />
          </i>
        </NavLink>
        <NavLink to={"/services"}>
          <i className="icon">
            <MdMiscellaneousServices />
          </i>
        </NavLink>
        <NavLink to={"/messeger"}>
          <i className="icon">
            <MdOutlineMessage />
          </i>
        </NavLink>
      </div>
    </motion.nav>
  );
}

export default navbar;
