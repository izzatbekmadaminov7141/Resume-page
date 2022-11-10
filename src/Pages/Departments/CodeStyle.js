import { createGlobalStyle } from "styled-components";

export const CodeMotion = {
  hidden: { opacity: 0 },
  show: { transition: { duration: 0.5 }, opacity: 1 },
  exit: { transition: { duration: 1 }, opacity: 0 },
};

const CodeGlobal = createGlobalStyle`
.Code{
  width: 1450px;
  min-height:100vh ;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  flex-wrap:wrap;
  position: absolute;
  right: 120px;
}
.card{
  width: 400px;
  background-color:var(--bgc-white);
  min-height: 300px;
  margin: 10px;
  cursor: pointer;
  transition: var(--t-1);
  border-radius:10px;
  display: flex;
  flex-direction: column;

  &:hover{
    box-shadow: 2px 2px 5px 5px rgb(171, 171, 171);
    transform: translateY(-10px);
  }
  img{
    border-radius: 10px;
    width: 100%;
  }
  h3{
    margin: 5px 0;
  }
  p{
    padding: 10px;
  }
  .btn-cover{
    width: 50%;
    padding: 8px 16px;
    margin: 10px auto;
    background-color:transparent;
    border: 3px solid var(--bgc-yellow);
    transition: var(--t-1);
    &:hover{
      background-color: var(--bgc-yellow);
    }
  }
}

`;
export default CodeGlobal;
