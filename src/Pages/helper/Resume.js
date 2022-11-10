import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Resumes from "../../Picture/my.png";
import ResumeStyled, { Line } from "./ResumeStled";
import ResumeMedia from "./ResumeMedia";
import { motion } from "framer-motion";
import resumeImg from "../../Picture/resume.pdf";
function Resume() {
  const ResumeRef = useRef();
  const onlyRef = useRef();
  //  information
  const [info] = useState([
    { pinfo: "Age", pnum: 25 },
    { pinfo: "Residence:", pnum: "Asaka" },
    { pinfo: "Freelance:", pnum: "Upwork" },
    { pinfo: "Address:", pnum: "Uzbekistan" },
  ]);
  // language
  // const [lang] = useState([
  //   { nation: "Uzbek", bil: "70%" },
  //   { nation: "English", bil: "40%" },
  //   { nation: "Russia", bil: "60%" },
  // ]);
  // onLine
  useEffect(() => {
    if (navigator.onLine) {
      onlyRef.current.style.backgroundColor = "green";
    } else {
      onlyRef.current.style.backgroundColor = "red";
    }
  });
  return (
    <motion.div
      className="resume"
      ref={ResumeRef}
      animate={{ x: 0, transition: { duration: 1 } }}
      initial={{ x: -500 }}
    >
      <ResumeStyled />
      <ResumeMedia />
      <div className="img__res">
        <img src={Resumes} alt="Madaminov Izzatbek " />
        <span ref={onlyRef}></span>
        <h2>Madaminov Izzatbek</h2>
        <h3>Front-End Developer</h3>
        <div className="icons">
          <a
            href="https://www.facebook.com/profile.php?id=100023161834812"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/izzatbek_madam1nov/">
            <i class="bi bi-instagram" target="_blank"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCIlqnSFJmaQVKzkk1Hkm4fQ"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i class="bi bi-youtube"></i>
          </a>
          <a
            href="https://t.me/madaminovizzatbek"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bi bi-telegram"></i>
          </a>
        </div>
      </div>
      <div className="data ">
        {info.map((i) => (
          <div className="d-flex">
            <p className="date-name">{i.pinfo}</p>
            <p>{i.pnum}</p>
          </div>
        ))}
      </div>
      {/* <div className="language">
        <h3>Language:</h3>
        {lang.map((list) => (
          <>
            <div className="d-flex">
              <p className="date-name">{list.nation}</p>
              <p>{list.bil}</p>
            </div>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: list.bil }}
            ></Line>
          </>
        ))}
      </div> */}

      <a href={resumeImg} target="_blank" rel="noreferrer">
        {" "}
        <button className="btn">
          Download CV <i class="bi bi-box-arrow-in-down"></i>
        </button>
      </a>
    </motion.div>
  );
}
export default Resume;
