import { createGlobalStyle } from "styled-components";

const HomeMedia = createGlobalStyle`
  .HomePage{
    @media (max-width:1024px){
        width: 900px;
        padding: 20px;
        right: 0;
        padding-bottom: 150px;
        .home{
          min-height: 10vh;
          padding-top: 8px 10px; 
          .home_left{
            h1{
              font-size: 40px;
            }
            p{
              font-size: 15px;
              width: 250px;
            }
            .btn-home{
              width: 50%;
            }
          }
          img{
            width: 40%;
            position: static;
          }
        }
        .skills{
          margin: 0 20px;
          display: flex;
          flex-direction: column;

          h1{
            font-size: 25px;
          }
          div{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
           span{
            font-size: 80px;
            margin: 20px;
           }
          }
        }
        
      }
      @media (max-width:768px) {
         width: 100%;
        .home{
          min-height: 20vh;
          padding-top: 10px;
          .home_left{
            width: 80%;
            h1{
              font-size:40px;}
            p{
              font-size: 10px;
              width: 300px;
            }
            .btn-home{width: 60%; }
          }
          img{
            width: 200px;
            position: relative;
          }
        }
        .skills{
          h1{
            font-size: 25px;
          }
          div{
           span{
            font-size: 40px;
           }
          }
        }
      }
      @media (max-width:425px) {
         width: 100%;
        .home{
          min-height: 10vh;
          padding-top: 5px;
          .home_left{
            width: 100%;
            margin: 0 auto;
            h1{
              font-size:25px;
              margin: 10px;
            }
            p{
              display: none;
            }
            .btn-home{width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 15px;
             }
          }
          img{
            width: 200px;
          }
        }
        .skills{
          h1{
            font-size: 20px;
          }
          div{
           span{
            font-size: 25px;
            margin: 0 1px;
           }
          }
        }
      }
    }
`;

export default HomeMedia;
