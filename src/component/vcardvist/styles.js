import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10%;
  align-items: center;
  background-color: #acd479;
  height: 100vh;
  .hint{
    font-family: sans-serif;
    color: #fff;
    margin-top 15px;
    margin-bottom: 0px;
    font-size: .75rem;

  }
  .fade-enter {
    transform: perspective(400px) rotateY(-90deg) rotateX(-90deg)
      translate3d(-100px, 50px, -50px);
  }

  .fade-enter.fade-enter-active {
    transform: perspective(400px) rotateY(0deg) rotateX(0deg)
      translate3d(0px, 0px, 0px);
    transition: all 600ms cubic-bezier(.83,.63,.7,1.2);
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export const StyledButton = styled.button`
  outline: none;
  height: 30px;
  width: 10rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  margin-bottom: 20px;
`;
