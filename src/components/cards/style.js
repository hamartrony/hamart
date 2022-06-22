import styled from "styled-components";

export const CardsDiv = styled.div`
  /* padding: 1em 0 0 1.5em; */
  width: 95%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  font-size: calc(10px + 1vmin);
  margin-top: 1em;
  background-color: #fff;
  border-radius: 1em;

  h2 {
    font-size: 1.2em;
    font-weight: 900;
    margin-left: 1.5em;
  }

  h3 {
    font-size: 1em;
    font-weight: 600;
    margin-left: 50px;
  }

  p {
    font-size: 1em;
    color: black;
    margin-left: 50px;
  }

  .item {
    width: 80%;
    margin-left: 1.5em;
  }

  .item img {
    position: absolute;
    width: 50px;
    height: 50px;
  }
`;
