import styled from "styled-components";

export const ProjetosDiv = styled.div`
  position: absolute;
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  justify-content: center;

  .all {
    width: 98%;
    height: 400px;
    position: absolute;
    margin-top: 4.8em;
    z-index: 1;
    flex-wrap: nowrap;
    background: #fff;
    border-radius: 1em;
    font-size: calc(10px + 0.5vmin);
    display: flex;
    flex-direction: column;
  }

  .text {
    width: 100%;
    height: 15%;
    margin: 0;
    align-items: flex-start;
    border-bottom: 1px solid #666666;
  }

  .tittle {
    font-size: 1.5em;
    margin-bottom: 10px;

    color: #000;
  }

  .icons {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    overflow-y: scroll;
  }

  .attr p {
    font-size: 1em;
    color: #000;
    font-weight: 400;
  }

  .txt2 {
    font-weight: 600;
    color: #0b66c2;
    font-size: 1.2em;
    margin-left: 0.6em;
    filter: brightness(70%);
    text-decoration: none;
  }

  .txt2:hover {
    font-weight: 900;
    filter: brightness(130%);
  }

  .attr button {
    border: none;
    margin-top: 8px;
    width: 100px;
    height: 20px;
    background-color: #0b66c2;
    border-radius: 7px;
    color: #fff;
    margin-left: 0.6em;
  }

  .attr button:hover {
    filter: brightness(130%);
  }

  .dialog {
    background-color: #fff;
    position: absolute;
    /* margin-left: 267px; */
    /* margin-top: -60px; */
    margin-top: 18.2em;
    width: 100%;
    height: 350px;
    display: ${(props) => (props.saibamais === false ? "none" : "inherit")};
    /* display: none; */
    z-index: 2;
  }

  img {
    height: 5em;
    width: 7em;
    filter: brightness(70%);
    border-radius: 10px;
  }

  img:hover {
    filter: brightness(100%);
  }

  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 1000vh;
    background-color: ${(props) =>
      props.modulo !== "home" && "rgba(0, 0, 0, 0.5)"};
    backdrop-filter: ${(props) => props.modulo !== "home" && "blur(2px)"};
    -webkit-backdrop-filter: ${(props) =>
      props.modulo !== "home" && "blur(5.5px)"};

    z-index: 1;

    .all {
      padding: 0;
      flex-direction: column;
      align-items: flex-start;
      /* justify-content: center; */
      width: 80%;
      height: 40em;
      max-width: 800px;
    }

    img {
      height: 5em;
      width: 7em;
    }

    .icons {
      height: 600px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      /* justify-content: space-between; */
      width: 100%;
      overflow-y: inherit;
    }
  }
`;
