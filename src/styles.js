import styled from "styled-components";

export const AppDiv = styled.div`
  background-color: #f3f2ef;
  color: #000;
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 0.5vmin);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section {
    width: 97%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    font-size: calc(10px + 1vmin);
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
    width: 80px;
    height: 80px;
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

  aside {
    padding-top: 2em;
    width: 97%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    font-size: calc(10px + 1vmin);
    margin-top: 4em;
    background-color: #fff;
    border-radius: 1em;
  }

  aside h2 {
    font-weight: 900;
  }

  aside .links {
    background-color: white;
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

  @media only screen and (min-width: 770px) {
    .main {
      max-width: 1000px;
    }
    .content {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-around;
    }

    section {
      width: 65%;
      height: 25em;
      margin-bottom: 1em;
    }

    aside {
      width: 33%;
      height: 23em;
    }

    .imagens {
      height: 33%;
      display: flex;
    }

    .imagens :last-child {
      width: 100%;
      height: 6.5em;
      border-radius: 0.7em 0.7em 0 0;
    }

    .imagens :first-child {
      width: 5em;
      height: 5em;
    }

    .text {
      height: 35%;
    }

    .links {
      height: 30%;
    }
  }

  @media only screen and (min-width: 1900px) {
    .main {
      max-width: 1500px;
    }
  }
`;
