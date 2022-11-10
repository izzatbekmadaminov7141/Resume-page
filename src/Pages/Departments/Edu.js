import React, { useState } from "react";
import styled from "styled-components";
import { FaUniversity } from "react-icons/fa";
import EduStyled from "./EndStyled";
import { motion } from "framer-motion";
import { CodeMotion } from "./Code/CodeStyle";
import EduMedia, { CardPage } from "./EduMedia";
function Edu() {
  const [state] = useState([
    {
      name: "NAMMTI",
      text: "2017-2021 yil Namangan Muhandislik Texnalogiya insitutida Axborot Texnalogiyalari kafedrasining Informatika va Axborot texnalogiya yo'nalishida ta'lim oldim",
    },
    {
      name: "SPC",
      text: "2018-2019 I worked as a Designer in the Marketing Department at the Science Progress Center",
    },
    {
      name: "NAMMTI",
      text: "During 2019-2021, Engineer programmer at the Information Technology Center at the Namangan Institute of Engineering Technology I worked as",
    },
    {
      name: "Stanford education",
      text: "2021-2022 started working as a FrontEnd Developer at the Stanford Learning Center.",
    },
    {
      name: "ICode Academy",
      text: "From 2022, I will work as a Lead Developer and Senior Trainer at ICode Academy.",
    },
  ]);

  return (
    <motion.div
      className="educ"
      variants={CodeMotion}
      animate="show"
      initial="hidden"
      exit="exit"
    >
      <EduStyled />
      <EduMedia />
      <Eduh1>Education:</Eduh1>
      {state.map((page) => (
        <CardPage className="carde">
          <div className="card-div">
            <h1 className="University">
              <FaUniversity />
              <span>{page.name}</span>
            </h1>
          </div>
          <div className="card-left-div">
            <p className="Uni__p">{page.text}</p>
          </div>
        </CardPage>
      ))}
    </motion.div>
  );
}

const Eduh1 = styled.div`
  margin: 30px 0;
  font-size: 40px;
`;
export default Edu;
