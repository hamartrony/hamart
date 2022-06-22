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
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .home {
    font-size: 2em;
    color: #666666;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    padding: 0.18em;
  }

  .home p:hover {
    color: black;
  }

  .menu {
    margin: 0;
    margin-right: 10px;
    width: 1em;
    height: auto;
    font-size: 1.5em;
    border-left: 0.5px #505050 solid;
    padding-left: 1.2em;
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
  }
`;
