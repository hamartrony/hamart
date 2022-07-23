import styled from "styled-components";

const black = "#262626";
const white = "#f2f2f2";

export const ButtonLink = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  button {
    width: auto;
    background-color: transparent;
    /* border: 1px ${(props) =>
      props.backgroundColor === "white" ? "black" : "white"} solid; */
    /* border-radius: 10px; */
    border: none;
    color: black;
    /* color: ${(props) =>
      props.backgroundColor === white
        ? black
        : props.backgroundColor === black && white}; */
    font-family: "Roboto Mono", monospace;
    font-size: 1.2em;
    font-weight: 900;
    border-bottom: 1px solid black;
  }

  button:hover {
    width: fit-content;
    cursor: pointer;
    /* background-color: ${(props) =>
      props.backgroundColor === "white" ? "black" : "white"}; */
    background-color: ${(props) =>
      props.backgroundColor === black ? "white" : "black"};
    color: ${(props) => (props.backgroundColor === black ? "#000" : "#fff")};
    border-radius: 10px;
  }
`;
