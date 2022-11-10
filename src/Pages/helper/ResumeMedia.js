import { createGlobalStyle } from "styled-components";

const ResumeMedia = createGlobalStyle`
  .resume{ 
    transition: all 0.1s ease;
     @media (max-width:1024px) {
      z-index: 1;
      left: -100%;
      box-shadow: 0px 0px 5px 3px #333;
      padding-bottom: 140px;
    }
    @media (max-width:450px){
      width: 100%;
      padding: 50px 80px;
      .img_res{
        line-height: 1;
      }
     }
  }
  
`;
export default ResumeMedia;
