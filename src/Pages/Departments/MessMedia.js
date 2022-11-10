import { createGlobalStyle } from "styled-components";
const MessMedia = createGlobalStyle`
.mess{
  @media (max-width:1024px) {
  width: 100% !important;
  right: 0px !important;
  margin-top: 50px;
  padding-bottom: 100px;
  }
  }
   @media (max-width:425px) {
  width: 100% !important;
  right: 0px !important;
  margin-top: 50px;
  form{
    width: 100%;
    text-align: center;
    label{
    }
    .input{
      display: block;
      width: 100%;
      margin: 20px auto;
    }
    .btn-submit{
      width: 100%;
      float: none;
      margin:20px auto;
    }
  }
  }

  
`;
export default MessMedia;
