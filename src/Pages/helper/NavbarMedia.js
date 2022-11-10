import { createGlobalStyle } from "styled-components";

const NavbarMedia = createGlobalStyle`
.show{
      left: 0%;
    }
nav{
  .iconResume{
    display: none;
    padding: 14px;
    background-color:var(--background);
    color:var(--text-p);
    border-radius:50px;
    font-size: 20px;
     margin: 0 10px;
    &:hover{
      background-color:var(--bgc-yellow);
    }
    }
  transition: all 0.3s ease;
  @media (max-width:1024px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
     height: 10vh;
    border-radius:  40px  40px 0 0;
    top:90%;
    z-index: 3;
    div{
      flex-direction: row;
      justify-content: center;
      align-items: center;
      a{
        margin: 0 10%;
        outline: none;
      }
      .active{
        background-color: transparent;
        transition: all 0s ease-in;
        padding: 0;
        
      }
   }
    .iconResume{
        display: block;
      }
  }
  @media(max-width:660px) {
      .media{
        a{
          margin: 0 4%;
        }
        .icon{
          font-size: 20px;
        }
        .iconResumes{
          font-size: 20px;
        }
      }
     
  }
  @media(max-width:660px) {
      .media{
        a{
          margin: 0 2px;
        }
        .icon{
          font-size: 15px;
        }
        .iconResume{
          font-size: 15px;
        }
      }
     
  }
}

`;
export default NavbarMedia;
