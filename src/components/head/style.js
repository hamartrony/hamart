import styled from "styled-components";

export const HeadDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 3.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background-color: white;
  z-index: 2;

  /* header #####################################*/
  .head {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .home {
    height: 100%;
    font-size: 2em;
    color: #666666;
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .home p {
    display: none;
  }

  .linkedin {
    display: flex;
    width: 40%;
  }

  .linkedin a {
    font-size: 0.9em;
    text-decoration: none;
    letter-spacing: 0px;
    transform: scale(1, 2.5);
    font-weight: 900;
    color: #000;
  }

  .home:hover > p {
    color: black;
  }

  .home :first-child:active {
    font-size: 0.8em;
    padding: 0.1em;
  }

  .home p:hover {
    color: black;
  }

  .menu {
    margin: 0;
    margin-right: 15px;
    width: 1em;
    height: auto;
    font-size: 1.2em;
    border-left: 0.5px #505050 solid;
    padding-left: 1em;
  }

  #home {
    border-bottom: ${(props) =>
      props.modulo === "home" ? ".15em  solid black" : "none"};
    color: ${(props) => props.modulo === "home" && "#000"};
  }
  #home p {
    color: ${(props) => props.modulo === "home" && "#000"};
  }

  #proj {
    border-bottom: ${(props) =>
      props.modulo === "projetos" ? ".15em  solid black" : "none"};
    color: ${(props) => props.modulo === "projetos" && "#000"};
  }
  #proj p {
    color: ${(props) => props.modulo === "projetos" && "#000"};
  }

  #sobre {
    border-bottom: ${(props) =>
      props.modulo === "sobre" ? ".15em  solid black" : "none"};
    color: ${(props) => props.modulo === "sobre" && "#000"};
  }

  #sobre p {
    color: ${(props) => props.modulo === "sobre" && "#000"};
  }

  #cont {
    border-bottom: ${(props) =>
      props.modulo === "contato" ? ".15em  solid black" : "none"};
    color: ${(props) => props.modulo === "contato" && "#000"};
  }
  #cont p {
    color: ${(props) => props.modulo === "contato" && "#000"};
  }

  @media only screen and (min-width: 770px) {
    padding: 0;
    align-items: center;
    justify-content: center;
    .head {
      flex-direction: row;
      justify-content: space-between;
      max-width: 1000px;
      font-size: 0.8em;
    }

    .linkedin {
      display: flex;
      width: 50%;
    }

    .linkedin a {
      font-size: 2em;
      transform: scale(1, 1.5);
    }

    .home:hover {
      color: #000;
    }

    .home p {
      display: inherit;
      font-size: 0.5em;
      margin: 0;
    }
  }

  @media only screen and (min-width: 1900px) {
    .head {
      max-width: 1500px;
    }
  }
`;
