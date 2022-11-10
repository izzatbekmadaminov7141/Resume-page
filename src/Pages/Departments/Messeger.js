import React from "react";
import { useRef, useEffect } from "react";
import Messege from "./MessegerStyle";
import { motion } from "framer-motion";
import { CodeMotion } from "./CodeStyle";
import MessMedia from "./MessMedia";
function Messeger() {
  const inputRef = useRef();

  useEffect(() => {
    InputChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, inputRef);
  function InputChange() {
    inputRef.current.focus();
  }
  return (
    <motion.div
      className="mess"
      variants={CodeMotion}
      animate="show"
      initial="hidden"
      exit="exit"
    >
      <Messege />
      <MessMedia />
      <h1>Messeger</h1>
      <form action="#">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="Nama"
            className="input"
            ref={inputRef}
            onChange={InputChange}
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input type="email" id="email" name="Email" className="input" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea className="input" name="message" id="message"></textarea>
        </div>
        <button className="btn btn-submit" type="submit">
          Submit
        </button>
      </form>
    </motion.div>
  );
}

export default Messeger;
