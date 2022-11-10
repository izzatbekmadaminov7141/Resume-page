import { createGlobalStyle } from "styled-components";

export const HomeMotion = {
  hidden: { y: -500 },
  show: { y:0, transition: { duration: 1 } },
};

const HomeStyled = createGlobalStyle`
.HomePage{
  width: 70vw;
  height: 95vh;
  padding: 0  30px;
  position: absolute;
  right: 10vw;
  top: 20px;
   .home{
  width: 100%;
  background-color:#fff;
  height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items:center;
  padding: 40px 100px;
  border-radius: 20px 20px 0 0;
  img{
    width: 300px;
  }
  .home_left{
    width: 65%;
    h1{
      color:#2b2b2b;
      font-size: 50px;
      span{
        color:var(--bgc-yellow);
      }
    }
    p{
      width: 500px;
      color: var(--text-p);
      margin: 30px 0;
    }
    .btn-home{
      width: 30%;
      border-radius:5px;
    }
  }

} 
.skills{
  h1{
    font-size:35px;
    margin: 20px 0;
    color:#2b2b2b;
  }
  div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* margin: 20px 0; */
    span{
      font-size: 70px;
      color: #2b2b2b;
      transition:var(--t-1);
      &:hover{
        transform: translateY(-5px);
      }
    }
  }
} 
}

`;

export default HomeStyled;
