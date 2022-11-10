import React from "react";
import Bgc from "../../Picture/my.png";
import HomeStyled, { HomeMotion } from "./HomeStyled";
import HomeMedia from "./HomeMedia";
import { motion } from "framer-motion";
// icons
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiFigma,
  SiAdobephotoshop,
  SiTypescript,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
function Home() {
  return (
    <motion.div
      exit="exit"
      className="HomePage"
      variants={HomeMotion}
      animate="show"
      initial="hidden"
    >
      <HomeStyled />
      <HomeMedia />
      <div className="home">
        <div className="home_left">
          <h1>
            I'm Madaminov Izzatbek <br /> <span>Front-End</span> Developer
          </h1>
          <p>
            Assalomu alaykum mening ismim Izzatbek men 1997-yil Andijon
            viloyatida tug'ilganman. Ma'lumotim Oliy , 2017 yil Namangan
            Muhandislik Texnalogiya Insituti, Muhandislik Texnalogiya fakulteti,
            Infarmatika va Axborot Texnalogiyalargi yo'nalishiga shartnoma
            asosida o'qishga kirdim. <br /> Dasturlash bo'yicha ish Foliyatimni
            2020 yil dan boshladim va Hozirda Icode Academyasida Mentor bo'lib
            ishlayman.
          </p>
          <a href="!#">
            <button className="btn btn-home">
              Hire me <i class="bi bi-arrow-right-short"></i>
            </button>
          </a>
        </div>
        <img src={Bgc} alt="" />
      </div>
      <div className="skills">
        <h1>Skills:</h1>
        <div>
          <span>
            {" "}
            <FaHtml5 />
          </span>
          <span>
            {" "}
            <FaCss3Alt />
          </span>
          <span>
            <FaSass />
          </span>
          <span>
            <FaBootstrap />
          </span>
          <span>
            <SiJavascript />
          </span>
          <span>
            <SiTypescript />
          </span>
          <span>
            <BsGithub />
          </span>
          <span>
            <FaReact />
          </span>
          <span>
            <SiRedux />
          </span>
          <span>
            <SiFigma />
          </span>
          <span>
            <SiAdobephotoshop />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
