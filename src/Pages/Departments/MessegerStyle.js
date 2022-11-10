import { createGlobalStyle } from "styled-components";

const Messege = createGlobalStyle`
  .mess{
  width: 1450px;
  min-height: 200px;
  padding: 0 30px;
  padding-bottom: 500px;
  position: absolute;
  right: 120px;
  text-align: center;
  background-color: #fff;
  margin-top: 100px;
  padding: 20px;
  }
  form{
    width: 700px;
    margin: 0 auto;
    text-align: left;
    label{
      text-align: right;
      margin-left: 10px;
      font-size: 20px;
    }
    .input{
      margin: 10px ;
      width: 100%;
      padding: 10px ;
      font-size: 20px;
      outline: none;
      border: 0.1px solid #dad5d5;
      border-radius: 5px;
      transition: all 0.3s ease-in;
      &:focus{
        box-shadow: 0px 0px 5px 5px #f7b301;
        border: 0.1px solid transparent;
      }
    }
    textarea{
      resize: none;
      height: 200px;
    }
    .btn-submit{
      width: 300px;
      float: right;
      border-radius: 5px;
      margin: 20px 0;
      transition: all 0.3s ease-in;
      &:hover{
        background-color: #f5b000;
        color: #fff;
      }
    }
  }
`;
export default Messege;
