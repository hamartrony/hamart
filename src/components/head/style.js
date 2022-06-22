import styled from "styled-components";

export const HeadDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 4em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background-color: white;
  z-index: 1;

  /* header #####################################*/
  .head {
    width: 97%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .home {
    font-size: 2em;
    color: #666666;
  }

  .linkedin {
    display: flex;
    width: 30%;
  }

  .linkedin a {
    font-size: 2.7em;
    color: #0b66c2;
  }

  a:hover {
    color: black;
  }

  .menu {
    margin: 0;
    width: 1em;
    height: auto;
    font-size: 1.5em;
    border-left: 0.5px #505050 solid;
    padding-left: 1.2em;
  }

  /* @media only screen and (max-width: 480px){
        padding: 0;
        flex-direction: row;
        align-items: flex-start;

       button{
        font-size: calc(9px + .1vmin)

       }

       width: 95vw;

    } */
`;
