import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
const ResumeStyled = createGlobalStyle` 
.resume{
    width:20rem;
    min-height: 100vh;
    background-color:#fff;
    padding: 50px 30px 20px 30px;
    text-align: center;
    margin-right:10px ;
    position: fixed;
    z-index: 3;
    img{
      width: 200px;
      height:200px;
      object-position: top;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: 4px 10px 20px 1px #c7c7c7;
    }
    .img__res{
      position: relative;
      line-height: 2;
      h2{
        font-weight: 300;
      }
      h3{
        font-weight: 100;
        color: var(--text-p);
      }
      span{
        position: absolute;
        width: 25px;
        height: 25px;
        background-color: rgb(390,150,30);
        border-radius:50px;
        top: 170px;
        right: 65px;
      }
      .icons{
        display: flex;
        justify-content:space-between;
        align-items:center;
        padding: 20px 0px;
        a{
          display: inline-block;
          color:#333;
          background-color:var(--bgc-yellow);
          padding: 2px 10px;
          border-radius:50px;
        }
      }
    
    }
    .data{
      padding: 10px 0;
      border-top: 0.5px solid  rgb(211, 211, 211);
      border-bottom: 0.5px solid rgb(211, 211, 211);
      .d-flex{
        margin: 15px 0;
        p{
           color:var(--text-p);
        }
        .date-name{
          background-color:var(--bgc-yellow);
          padding: 4px ;
          color: #333;
        }
      }
    }
    .language{
      padding: 20px 0;
      .d-flex{
        margin: 15px 0;
        p{
           color:var(--text-p);
        }
        .date-name{
          font-weight: 400;
          padding: 4px ;

        }
      }
    } 
   
    
 }
 .skills{
  padding: 20px 0;
    border-top: 0.5px solid  rgb(211, 211, 211);
      border-bottom: 0.5px solid rgb(211, 211, 211);
      
    .d-flex{
      margin: 15px 0;
      p{
         color:var(--text-p);
      }
    }
   
 }
 .extra__skills{
  margin: 15px 0;
  .d-flex{

i{
    margin: 10px 0;
    font-size: 20px;
    color:var(--text-p);
  }
  p{
    font-size: 20px;
    color:var(--text-p);
  } 
  }
  
 }
 .btn{
  cursor: pointer;
  i{
    font-size: 20px;
  }
 }
`;

export const Line = styled(motion.div)`
  width: 5%;
  height: 5px;
  border-radius: 50px;
  background-color: var(--bgc-yellow);
`;

export default ResumeStyled;
