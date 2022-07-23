import { useState } from "react";
import { ContatoDiv } from "./style";
import insta from "../../images/icons8-instagram-96.png";
import linkd from "../../images/linkedin.png";
import git from "../../images/git.png";
import mail from "../../images/e-mail.png";
import ButtonClose from "../buttonClose/button-close";

export const Contato = ({ handleClick, color, modulo, handlePage }) => {
  return (
    <ContatoDiv>
      <div className="all">
        <div className="text">
          {/* <ButtonClose handlePage={handlePage} /> */}
          <p className="tittle">Pode me encontrar aqui!</p>
        </div>

        <div className="icons">
          <p className="tittle">Informações de contato.</p>

          <div className="attr">
            <a href="mailto:hamart23@hotmail.com">
              <img src={mail} alt="Email icon"></img>
            </a>
            <p className="txt1">E-mail</p>
            <a
              className="txt2"
              href="mailto:hamart23@hotmail.com"
              target="blank"
            >
              hamart23@hotmail.com
            </a>
          </div>

          <div className="attr">
            <a href="https://www.linkedin.com/in/hamartrony/" target="blank">
              <img className="lkd" src={linkd} alt="Linkedin icon"></img>
            </a>
            <p className="txt1">Linkedin</p>
            <a
              className="txt2"
              href="https://www.linkedin.com/in/hamartrony/"
              target="blank"
            >
              linkedin/hamartrony
            </a>
          </div>

          <div className="attr">
            <a href="https://github.com/hamartrony" target="blank">
              <img src={git} alt="Github icon"></img>
            </a>
            <p className="txt1">GitHub</p>
            <a
              className="txt2"
              href="https://github.com/hamartrony"
              target="blank"
            >
              github/hamartrony
            </a>
          </div>
        </div>
      </div>
    </ContatoDiv>
  );
};
