import styled, { createGlobalStyle } from "styled-components";

export const CardPage = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--bgc-white);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
`;
const EduMedia = createGlobalStyle`

  .educ{
    @media (min-width: 1024px){
      position: fixed;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .carde{
        width: 100%;
        flex-direction: row;
        min-height: 10px;
        &:hover{
        background-color: #333;
        box-shadow: 0px 0px  50px 5px #f7b301;
       cursor: grab;
        .card-div, .card-left-div{
        color: #f7b301;
         }
         }
         .University{
          border-right: 1px solid #f7b301;
         }
         .Uni__p{
           margin: 10px;
}

      }
    }
  @media (max-width:1024px){
    width:100%;
    right: 0px;
    padding-bottom: 100px;
    position: absolute;
  }
   @media (max-width:768px){
    width:100%;
    right: 0px;
    .carde{
      display: flex;
      flex-direction: column;
      .card-div{
          .University{
          flex-direction: column;
          font-size: 30px;
        }
      }
      .card-left-div{
        width: 100%;
        border-top:1px solid #333;
        border-left: none;
        text-align: center;
      }
    }
  }
  @media (max-width:425px) {
      .card{
      .card-div{
          .University{
          font-size: 20px;
        }
      }
  }
}
 }
`;
export default EduMedia;
