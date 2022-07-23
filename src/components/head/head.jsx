import { HeadDiv } from "./style";
import linkedin from "../../images/icons8-linkedin-96.png";
import { AiFillHome } from "react-icons/ai";
import { BsFillBagDashFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";

export const Head = ({ handlePage, modulo }) => {
  const hamart = "<h1>Hamart Rony</h1>";

  return (
    <HeadDiv modulo={modulo}>
      <div className="head">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/hamartrony/" target="blank">
            {hamart}
          </a>
        </div>

        <button className="home" id="home" onClick={() => handlePage("home")}>
          <AiFillHome />
          <p>Início</p>
        </button>

        <div onClick={() => handlePage("projetos")} id="proj" className="home">
          <BsFillBagDashFill />

          <p>Projetos</p>
        </div>

        <button onClick={() => handlePage("sobre")} id="sobre" className="home">
          <FaUserAlt />
          <p>Sobre</p>
        </button>

        <button
          onClick={() => handlePage("contato")}
          id="cont"
          className="home"
        >
          <BsFillChatRightDotsFill />
          <p>Contato</p>
        </button>
        <div className="menu">
          <button
            href="https://www.linkedin.com/in/hamartrony/"
            target="blank"
            className="home"
          >
            <CgMenuGridR />
          </button>
        </div>
      </div>
    </HeadDiv>
  );
};
