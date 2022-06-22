import styled from "styled-components";

export const AppDiv = styled.div`
  background-color: #f3f2ef;
  color: #000;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  font-size: calc(10px + 0.5vmin);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  section {
    width: 97%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    font-size: calc(10px + 1vmin);
    margin-top: 4em;
    background-color: #fff;
    border-radius: 1em;
  }

  /* IMAGENS SECTION */

  .imagens {
    height: 33%;
    display: flex;
  }

  .imagens :last-child {
    width: 100%;
    height: 75%;
    border-radius: 0.7em 0.7em 0 0;
  }

  .imagens :first-child {
    width: 6em;
    height: 6em;
    position: absolute;
    border-radius: 60%;
    background-color: #505050;
    margin-top: 3em;
    margin-left: 1.3em;
    border: 0.2em solid #fff;
  }

  /* TEXTOS SECTION */
  .text {
    width: 45%;
    height: 42%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-left: 1.5em;
  }

  .text h2 {
    font-size: 1.3em;
    font-weight: 900;
  }

  .text h3 {
    text-align: start;
    margin-top: 0.5em;
  }

  p {
    font-size: 0.9em;
    color: #666666;
    margin-top: 0.5em;
  }

  .font2 {
    font-size: 0.8em;
    font-weight: 900;
    color: #0b66c2;
  }

  .links {
    height: 25%;
    padding: 0 1em 0 1.5em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .sobre {
    width: 40%;
    height: 2.5em;
    margin-right: 0.5em;
    background-color: #0b66c2;
    border-radius: 1em;
    border: none;
    color: #fff;
    font-weight: 600;
  }

  .sobre:hover {
    background-color: #0060c0;
  }

  .contato {
    width: 40%;
    height: 2.5em;
    margin-right: 0.5em;
    background-color: #fff;
    border-radius: 1em;
    border: 1px #0b66c2 solid;
    color: #0b66c2;
    font-weight: 600;
  }

  .mais {
    width: 15%;
    height: 2.5em;
    background-color: #fff;
    border-radius: 1em;
    border: 1px #666666 solid;
    color: #666666;
    font-weight: 600;
  }

  .descr {
    background-color: #f3f2ef;
    height: 50%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em 0 0 1em;
    border-radius: 10px;
  }

  .descr h2 {
    font-size: 0.7em;
    font-weight: 900;
  }

  .descr p {
    font-size: 0.7em;
    color: #000;
    text-align: left;
    margin: 0;
  }

  .descr .font2 {
    font-size: 0.8em;
    font-weight: 900;
    color: #0b66c2;
  }

  /* antigo */

  .body {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Menus */
  .menu {
    /* width: 95%; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 10px;
  }

  /* imagens tecnologias */
  .icons {
    width: 95%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .css img {
    width: 11.5em;
    height: 11.5em;
    transform: ${(props) =>
      props.modulo === "home" ? "rotate(45deg)" : "none"};
    margin-top: ${(props) => (props.modulo === "home" ? "25px" : "0px")};
    margin-left: -5em;
  }

  .js img {
    width: 10em;
    height: 10em;
  }

  .html img {
    transform: ${(props) =>
      props.modulo === "home" ? "rotate(-45deg)" : "none"};
    width: 10em;
    height: 10em;
    margin-right: -5em;
  }

  footer {
    margin-top: 10px;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .social {
    height: 4.1em;
    display: flex;
    align-items: flex-end;
  }

  .social a {
    font-size: 3em;
    color: #000;
  }

  .social a:hover {
    font-size: 4em;
  }

  @media only screen and (min-width: 800px) {
    .body {
      /* width: 70vw; */
      align-items: center;
      max-width: 900px;
    }

    .menu {
      width: 80%;
      justify-content: space-between;
    }
  }
`;
