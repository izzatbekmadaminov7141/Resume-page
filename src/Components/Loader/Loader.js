import React from "react";
import LoaderStyled from "./LoderStyled";
function Loader() {
  return (
    <div className="Loader">
      <LoaderStyled />
      <div className="spinner">
        <p>loading...</p>
        <div className="spinner-area spinner-first"></div>
        <div className="spinner-area spinner-second"></div>
        <div className="spinner-area spinner-third"></div>
      </div>
    </div>
  );
}

export default Loader;
