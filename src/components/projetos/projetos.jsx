import { useState } from "react";
import { ProjetosDiv } from "./style";
import insta from "../../images/icons8-instagram-96.png";
import linkd from "../../images/icons8-linkedin-96.png";
import git from "../../images/git.png";
import burguer from "../../images/projetos/bruguer-kenzie.png";
import photo from "../../images/projetos/Kenzie-photo1.png";
import nukenzie from "../../images/projetos/nukenzie.png";
import muro from "../../images/projetos/construcao.jpeg";
import ButtonClose from "../buttonClose/button-close";

export const Projetos = ({ handleClick, color, modulo, handlePage }) => {
  // const [buttonColor, setButton] = useState("white")

  // const changeButton = ()=>{
  //   buttonColor === 'black' ? setButton('white') : setButton("black")
  // }

  return (
    <ProjetosDiv>
      <ButtonClose handlePage={handlePage} />
      <section>
        <p>Projetos Estudo!</p>

        <div className="learn">
          <a href="https://nukenzie-iota.vercel.app/" target="blank">
            <img src={nukenzie} alt="Nukenzie"></img>
          </a>

          <a href="https://locationphoto.vercel.app/" target="blank">
            <img src={photo} alt="location app"></img>
          </a>

          <a href="https://burguer-ivory.vercel.app/" target="blank">
            <img src={burguer} alt="Burguer"></img>
          </a>
        </div>

        <p>Projetos Trabalho!</p>

        <div className="job">
          <img src={muro} alt="muro"></img>
          <p>Em Breve!</p>
        </div>
      </section>
    </ProjetosDiv>
  );
};
