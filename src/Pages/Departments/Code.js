import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CodeMedia from "./CodeMedia";
import CodeGlobal, { CodeMotion } from "./CodeStyle";
import { motion } from "framer-motion";
// icons
import { GrCaretNext } from "react-icons/gr";

function Code() {
  const [state] = useState([
    {
      img: "https://i.pinimg.com/originals/d8/39/74/d839742a057e1d111d0373fa614de906.jpg",
      h3: "FastFood",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum",
    },
    {
      img: "https://i.pinimg.com/originals/d8/39/74/d839742a057e1d111d0373fa614de906.jpg",
      h3: "FastFood",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum",
    },
    {
      img: "https://i.pinimg.com/originals/d8/39/74/d839742a057e1d111d0373fa614de906.jpg",
      h3: "FastFood",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum",
    },
    {
      img: "https://i.pinimg.com/originals/d8/39/74/d839742a057e1d111d0373fa614de906.jpg",
      h3: "FastFood",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum",
    },
    {
      img: "https://i.pinimg.com/originals/d8/39/74/d839742a057e1d111d0373fa614de906.jpg",
      h3: "FastFood",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum",
    },
    {
      img: "https://i.pinimg.com/originals/d8/39/74/d839742a057e1d111d0373fa614de906.jpg",
      h3: "FastFood",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum",
    },
  ]);
  return (
    <motion.div
      className="Code"
      variants={CodeMotion}
      animate="show"
      initial="hidden"
      exit="exit"
    >
      <CodeMedia />
      <CodeGlobal />
      <h1>Portfolio</h1>
      <Ptext>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum
        veniam labore, iure voluptate voluptatibus asperiores placeat
      </Ptext>
      <div className="d-flex">
        {state.map((card) => (
          <div className="col-4">
            <div className="card">
              <img src={card.img} alt="" />
              <h3>{card.h3}</h3>
              <p>{card.text}</p>
              <i>{card.code}</i>

              <button className="btn btn-cover">
                <i>
                  <GrCaretNext />
                </i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const Ptext = styled.p`
  width: 500px;
  margin: 10px 0;
  color: var(--text-p);
`;
export default Code;
