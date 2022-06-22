import styled from "styled-components";

export const ContatoDiv = styled.div`
  width: 90vw;
  height: 60vh;
  position: absolute;
  margin-top: 80px;

  align-items: center;
  padding: 0px 10px 0px 10px;
  flex-wrap: nowrap;
  background: rgba(101, 118, 140, 0.6);
  box-shadow: 0 8px 32px 0 rgba(68, 80, 95, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(51, 153, 255, 0.18);
  font-size: calc(10px + 0.5vmin);

  p {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .icons {
    height: auto;
    display: flex;
    justify-content: space-around;
    width: 80%;
  }

  img {
    height: 5em;
    width: 5em;
  }

  img:hover {
    transform: rotate(45deg);
  }

  .lkd {
    height: 6.5em;
    width: 6.5em;
  }

  /* button {
    background-color: transparent;
    border: 1px
      ${(props) => (props.backgroundColor === "white" ? "black" : "white")}
      solid;
    border-radius: 10px;
    color: ${(props) =>
    props.backgroundColor === "white" ? "black" : "white"};
    font-family: "Roboto Mono", monospace;
    font-size: calc(10px + 0.5vmin);
  }

  button:hover {
    cursor: pointer;
    background-color: ${(props) =>
    props.backgroundColor === "white" ? "black" : "white"};
    color: ${(props) =>
    props.backgroundColor === "white" ? "white" : "black"};
  } */

  @media only screen and (min-width: 800px) {
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    max-width: 800px;

    .icons {
      padding: 1em 5em;
    }

    button {
      font-size: calc(9px + 0.1vmin);
    }
  }
`;
