import { createGlobalStyle } from "styled-components";

const EduStyled = createGlobalStyle`
.educ{
  width: 1450px;
  min-height: 200px;
  padding: 0 30px;
  position: absolute;
  right: 120px;
}
.card-div{
  width: 400px;
  color: #333;
  min-height: 20px;
  .University{
  padding: 5px 20px;
  display: flex;
  align-items:center;
  span{
    margin-left: 15px;
  }
     display: flex;
     justify-content: flex-start;
    align-items: center;
    span{
      margin-left: 5px;
    }
  }
}
.card-left-div{
  width: 700px;
  padding: 10px;
  color: #333;
}
.carde{
  transition: all 0.5s ease-in;
}
`;
export default EduStyled;
