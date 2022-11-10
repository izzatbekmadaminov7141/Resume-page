import React from "react";
import ServicesStyle from "./ServeisStyle";
// icons
import { SiAdobephotoshop } from "react-icons/si";
import { BsPersonBadge, BsFileEarmarkCodeFill } from "react-icons/bs";
import { IoMdFitness } from "react-icons/io";
import { GiCook } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { CodeMotion } from "./CodeStyle";
import ServiceMedia from "./ServisMedia";
function Services() {
  const [icons] = useState([
    {
      icon: <BsFileEarmarkCodeFill />,
      h1text: "Web developer",
      pText: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: <SiAdobephotoshop />,
      h1text: "PhotoShop",
      pText: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: <BsPersonBadge />,
      h1text: "Bloger",
      pText: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: <IoMdFitness />,
      h1text: "Fitness",
      pText: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: <GiCook />,
      h1text: "Cooking",
      pText: "lorem ipsumdolor sit amet.",
    },
    {
      icon: <FaChalkboardTeacher />,
      h1text: "Senior Instructor",
      pText: "lorem ipsumdolor sit amet.",
    },
  ]);
  return (
    <motion.div
      className="Service"
      variants={CodeMotion}
      animate="show"
      initial="hidden"
      exit="exit"
    >
      <ServicesStyle />
      <ServiceMedia />
      <h1>Services</h1>
      <p className="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem
        unde temporibus quod nulla amet modi et? Modi aspernatur fuga, eaque
        vero cum quas molestiae nisi ducimus, dicta praesentium cupiditate.
      </p>
      <div className="fathCard d-flex">
        {icons.map((icon) => (
          <div className="col-6">
            <div className="card">
              <i className="icon">{icon.icon}</i>
              <h1>{icon.h1text}</h1>
              <p>{icon.pText}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;
