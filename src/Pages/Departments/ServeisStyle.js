import { createGlobalStyle } from "styled-components";

const ServicesStyle = createGlobalStyle`
.Service{
  width: 1450px;
  min-height: 200px;
  padding: 0 20px;
  position: absolute;
  right: 120px;
  text-align: center;
  margin-top: 50px;
  h1 {
    font-size: 40px;
    margin: 0;
  }
  .p {
    width: 500px;
    text-align: center;
    margin: 10px auto;
    color: #767676;
  }
}
  .card{
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 20px;
    transition: all 0.3s ease-in;
    background-color: #fff;
    border-radius: 5px;
    .icon{
      font-size: 90px;
      color: #f7b301;
    }
    &:hover{
      color:#f7b301;
      background-color:#333 ;
      transform: translateY(-10px);
      box-shadow: 2px 2px 30px 5px #f7b301;
      .icon{
        color:#fff;
      }
  }
  }
  .col-6{
    width: 400px;
    margin: 10px;
}
`;
export default ServicesStyle;
