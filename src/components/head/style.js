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
  z-index: 1;

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
    width: 30%;
  }

  .linkedin a {
    font-size: 2.7em;
    color: #0b66c2;
  }

  .home:hover {
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

  #aqui {
    text-decoration: ${(props) => (props.modulo === "home" ? "solid" : "none")};
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

    .home {
      /* font-size: 1.9em; */
    }

    .home p {
      display: inherit;
      font-size: 0.5em;
      margin: 0;
    }

    #home {
      border-bottom: ${(props) =>
        props.modulo === "home" ? ".15em  solid black" : "none"};
    }
    #proj {
      border-bottom: ${(props) =>
        props.modulo === "projetos" ? ".15em  solid black" : "none"};
    }
    #sobre {
      border-bottom: ${(props) =>
        props.modulo === "sobre" ? ".15em  solid black" : "none"};
    }
    #cont {
      border-bottom: ${(props) =>
        props.modulo === "contato" ? ".15em  solid black" : "none"};
    }
  }
`;
