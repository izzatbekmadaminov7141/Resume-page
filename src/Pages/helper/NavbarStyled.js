import { createGlobalStyle } from "styled-components";

const NavbarStyled = createGlobalStyle`
nav{
  overflow: hidden;
  width: 100px;
  height: 63vh;
  display: flex;
  position: fixed;
  top: 20%;
  border-radius:  40px 0 0  40px;
  right: 0;
  justify-content: center;
  flex-direction: column;
  align-items:center;
  text-align: center;
  background-color: var(--bgc-white);
  padding: 20px;

  .lamp{
     display: inline-block;
    padding: 14px;
    background-color:var(--background);
    color:var(--text-p);
    border-radius:50px;
    font-size: 25px;
    cursor: pointer;
  }
  .icon{
    display: inline-block;
    margin: 20px 0 ;
    padding: 14px;
    background-color:var(--background);
    color:var(--text-p);
    border-radius:50px;
    font-size: 25px;
  }  
  .active{
    transition: all 0.5s ease-in;
    background-color: var(--bgc-yellow);
    display: inline-block;
    border-radius:80px 80px  80px 0 ;
    padding: 0 10px;  
    i{
      background-color:#333;
      color: #fff;
    }
  } 
  div{
    display: flex;
    flex-direction: column;
    a{
      outline: none;
    }
     .i{
      margin: 30px 0;
      cursor: pointer;
     }
  }
}
.navbar{
  background-color:rgb(201, 201, 201);
}
`;

export default NavbarStyled;
