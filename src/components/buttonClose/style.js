import styled from "styled-components";

export const ButtonClose = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: end;
  padding: 10px;

  button {
    background-color: transparent;
    /* border: 1px
      ${(props) => (props.backgroundColor === "white" ? "black" : "white")}
      solid; */
    border-radius: 10px;
    /* color: ${(props) =>
      props.backgroundColor === "white" ? "black" : "white"}; */
    font-family: "Roboto Mono", monospace;
    font-size: calc(10px + 0.5vmin);
    color: black;
    border: 1px black solid;
  }

  button:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    border: 1px white solid;
    font-weight: 600;

    /* background-color: ${(props) =>
      props.backgroundColor === "white" ? "black" : "white"};
    color: ${(props) =>
      props.backgroundColor === "white" ? "white" : "black"}; */
  }
`;
