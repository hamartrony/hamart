import { useState } from "react";
import { ContatoDiv } from "./style";
import insta from "../../images/icons8-instagram-96.png";
import linkd from "../../images/icons8-linkedin-96.png";
import git from "../../images/git.png";
import mail from "../../images/e-mail.png";
import ButtonClose from "../buttonClose/button-close";

export const Contato = ({ handleClick, color, modulo, handlePage }) => {
  // const [buttonColor, setButton] = useState("white")

  // const changeButton = ()=>{
  //   buttonColor === 'black' ? setButton('white') : setButton("black")
  // }

  return (
    <ContatoDiv>
      <ButtonClose handlePage={handlePage} />
      <p>Pode me contactar por estas redes, e me conhecer melhor.</p>

      <div className="icons">
        <a href="mailto:hamart23@hotmail.com">
          <img src={mail} alt="Email icon"></img>
        </a>
        <a href="https://www.linkedin.com/in/hamartrony/" target="blank">
          <img className="lkd" src={linkd} alt="Instagram icon"></img>
        </a>
        <a href="https://github.com/hamartrony" target="blank">
          <img src={git} alt="Instagram icon"></img>
        </a>
      </div>
    </ContatoDiv>
  );
};
