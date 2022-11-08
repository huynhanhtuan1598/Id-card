import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 10px;
  position: relative;
  text-align: initial;
  width: 370px;
  height: 230px;
  @media (max-width: 370px) 
    width: 100vw;
  }
  .front {
    transform: perspective(1000px) rotateX(0deg);
  }
  .back {
    transform: perspective(1000px) rotateX(180deg);
  }
  .rotate-front {
    transform: perspective(1000px) rotateX(180deg);
  }
  .rotate-back {
    transform: perspective(1000px) rotateX(360deg);
  }
`;

const StyledVCard = styled.div`
  box-sizing: border-box;
  position: absolute;
  backface-visibility: hidden;
  display: inline-flex;
  width: 370px;
  height: 225px;
  @media (max-width: 370px) {
    width: 100vw;
  }
  padding: 0 10px;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  transition: all 1s cubic-bezier(0.52, -0.76, 0.52, 1.65);
  img {
    user-select: none;
  }
`;
export const StyledVCardFront =  styled(StyledVCard)`
  justify-content: space-between;
  font-style: normal;
  background-color: #fff;
  overflow: hidden;
  .left-half {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 285px;
    padding: 10px;
    padding-right: 0;
  }
  .right-half {
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    &:hover,
    &:hover > div {
      border-color: #acd479;
    }
    &:hover .sm-logo {
      filter: grayscale(0) saturate(0.5);
    }
  }
  .right-half,
  .vrule-1,
  .vrule-2 {
    border-left: 1px solid #dfe1e5;
    border-right: 1px solid #dfe1e5;
    width: 66px;
  }
  .vrule-1,
  .vrule-2 {
    width: 12px;
    @media (max-width: 370px) {
      display: none;
    }
  }
  .vrule-1 {
    @media (max-width: 370px) {
      display: inherit;
      margin: 0 7px;
      width: 20px;
    }
  }
  a {
    text-decoration: none;
    color: #00914c;
  }
  a:hover {
    color: #acd479;
  }
  h1,
  h2,
  h3 {
    text-align: left;
    font-weight: 300;
    font-size: 0.85rem;
  }
  .name {
    font-weight: 500;
    font-size: 1.2rem;
    padding-top: 8px;
    margin-bottom: 0px;
  }
  h2 {
    text-transform: uppercase;
    margin-top: 0px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dfe1e5;
  }
  h3 {
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .logo {
    align-self: flex-end;
    padding-right: 10px;
  }
  .sm-logo {
    position: absolute;
    bottom: 15px;
    filter: grayscale();
  }
`;

export const StyledVCardBack = styled(StyledVCard)`
  background-color: #666;
  justify-content: center;
  align-items: center;
  .back-logo {
    width: 80%;
    filter: invert(100%) hue-rotate(180deg);
  }
`;

