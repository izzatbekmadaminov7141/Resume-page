import { createGlobalStyle } from "styled-components";
const ServiceMedia = createGlobalStyle`
.Service{
  @media (min-width:1024px){
    position: fixed;
    overflow-y: hidden;
  }
  @media (max-width:1024px) {
  width: 100% !important;
  right: 0px !important;
  margin-top: 20px;
  padding-bottom: 100px;
  position: absolute;
  margin-x:auto; 
  h1 {
    font-size: 40px;
    margin: 30px 0;
  }
  .p {
    width: 400px;
    text-align: center;
    margin: 40px auto;
    color: #767676;
  }
  }
   @media (max-width:1024px) {
  width: 100% !important;
  right: 0px !important;
  margin-top: 20px;
  margin-bottom: 40px;
  }
   @media (max-width:768px) {
  h1 {
    font-size: 30px;
    margin: 10px 0;
  }
  .p {
    width: 400px;
    text-align: center;
    margin: 20px auto;
    color: #767676;
  }
  .d-flex{
    justify-content: center;
  }
   .col-4{
      width:100%;
      margin: 20px 0;
    }
  .card{
    .icon{
      font-size: 50px;
    }
  }
  }
  @media (max-width:425px) {
      .p{
       display: none;
      }
  }
}
`;
export default ServiceMedia;
