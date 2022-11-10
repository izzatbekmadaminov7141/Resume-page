import { createGlobalStyle } from "styled-components";

const CodeMotion = createGlobalStyle`
  .Code{  
    @media (max-width:1024px) {
      width: 100% !important;
      padding: 10px 20px;
      display: flex;
      right: 500px !important;
      padding-bottom: 100px;
      position: static !important;
      .d-flex{
        justify-content: center;
        flex-wrap: wrap;
        .col-4{
          width: 30%;
          margin:  10px;
          .card{
            width: 100%;
            min-height: 100px;
            margin: 10px;
            p{
              display: none;
            }
            .btn-cover{
              width: 30%;
            }
          }
        }
      }
  }
   @media (max-width:580px) {
       width: 100%;
        right: 0;
        padding-bottom:100px ;
      h1{
        font-size: 25px;
      }
      p{
        width: 290px;
      }
      .d-flex{
        justify-content: space-around;
        flex-wrap: wrap;
        .col-4{
          width: 30%;
          margin:  10px;
          .card{
            width: 100%;
            min-height: 100px;
            margin: 10px;
            
            p{
              display: none;
            }
            .btn-cover{
              width: 90%;
              padding: 5px 0;
            }
          }
        }
      }
  }
  @media (max-width:425px) {
       width: 100%;
        right: 0;
      .d-flex{
        .col-4{
          width: 100%;
          margin:  10px;
          .card{
            width: 100%;
            min-height: 100px;
            margin: 10px;
            
            p{
              display: none;
            }
            .btn-cover{
              width: 90%;
              padding: 5px 0;
            }
          }
        }
      }
  }
}

`;
export default CodeMotion;
