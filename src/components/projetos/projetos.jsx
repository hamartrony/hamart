import { useState } from "react";
import { ContatoDiv, ProjetosDiv } from "./style";
import insta from "../../images/icons8-instagram-96.png";
import linkd from "../../images/linkedin.png";
import git from "../../images/git.png";
import mail from "../../images/e-mail.png";
import ButtonClose from "../buttonClose/button-close";
import nukenzie from "../../images/projetos/nukenzie.png";
import photo from "../../images/projetos/Kenzie-photo1.png";
import burguer from "../../images/projetos/bruguer-kenzie.png";
import { CardProjects } from "../cardProjects/cardProject";

export const Projetos = ({ handleClick, color, modulo, handlePage }) => {
  let projetos = [
    {
      id: 1,
      link: "https://nukenzie-iota.vercel.app/",
      img: nukenzie,
      alt: "nukenzie",
      a: "Nukenzie",
      p: "Aplicação em react loren ipsum doesl dejsdh ksdjahs ekjsk dhh ",
      dialog:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      link: "https://locationphoto.vercel.app/",
      img: photo,
      alt: "location app",
      a: "PhotoLocal",
      p: "Aplicação em react loren ipsum doesl dejsdh ksdjahs ekjsk dhh ",
      dialog:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      link: "https://burguer-ivory.vercel.app/",
      img: burguer,
      alt: "burger app",
      a: "KenzieBurguer",
      p: "Aplicação em react loren ipsum doesl dejsdh ksdjahs ekjsk dhh ",
      dialog:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      link: "https://burguer-ivory.vercel.app/",
      img: burguer,
      alt: "burger app",
      a: "KenzieBurguer",
      p: "Aplicação em react loren ipsum doesl dejsdh ksdjahs ekjsk dhh ",
      dialog:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 5,
      link: "https://burguer-ivory.vercel.app/",
      img: burguer,
      alt: "burger app",
      a: "KenzieBurguer",
      p: "Aplicação em react loren ipsum doesl dejsdh ksdjahs ekjsk dhh ",
      dialog:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  const [saibamais, setSaiba] = useState(false);
  const [num, setNum] = useState("");
  const [text, setText] = useState("");

  function handleSaiba(index) {
    setText(projetos[index - 1].dialog);
    setSaiba(true);
    console.log(index, num);

    if (num === index) {
      setSaiba(false);
      setNum("");
    } else {
      setNum(index);
    }
  }

  return (
    <ProjetosDiv saibamais={saibamais}>
      <div className="all">
        <div className="text">
          <p className="tittle">Projetos!</p>
        </div>

        <div className="icons">
          {projetos.map((item, index) => (
            <CardProjects
              handleSaiba={handleSaiba}
              link={item.link}
              img={item.img}
              alt={item.alt}
              a={item.a}
              p={item.p}
              dialog={item.dialog}
              key={item.id}
              id={item.id}
              num={num}
            ></CardProjects>
          ))}
          <div className="dialog">{text}</div>
        </div>
      </div>
    </ProjetosDiv>
  );
};
