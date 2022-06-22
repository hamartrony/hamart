import styled from "styled-components";

export const ProjetosDiv = styled.div`
  width: 90vw;
  height: 60vh;
  position: absolute;
  margin-top: 80px;

  align-items: center;
  padding: 0px 5px 0px 5px;
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
  }

  section {
    margin-top: 1em;
    height: 70%;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  a {
    width: 30%;
    height: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    filter: brightness(0.5);
    /* margin: 0 1em 0 1em; */
    /* margin: 1em; */
    /* padding: 1em; */
  }

  .learn,
  .job {
    width: 100%;
    margin: 0;
    display: flex;

    justify-content: space-around;
  }

  .job img {
    width: 10em;
    height: 8em;
  }

  .job p {
    position: absolute;
    margin-top: 2.5em;
    color: white;
    font-weight: 900;
  }

  img:hover {
    /* height: 8em;
    width: 8em; */
    filter: brightness(1);
  }

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
      font-size: calc(9px + 0.5vmin);
    }
  }
`;
