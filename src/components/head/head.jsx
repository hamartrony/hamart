import { HeadDiv } from "./style";
import linkedin from "../../images/icons8-linkedin-96.png";
import { AiFillHome } from "react-icons/ai";
import { BsFillBagDashFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";

export const Head = () => {
  return (
    <HeadDiv>
      <div className="head">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/hamartrony/" target="blank">
            {/* <img src={linkedin} alt="linkedin icon"></img> */}
            <GrLinkedin />
          </a>
        </div>

        <a
          href="https://www.linkedin.com/in/hamartrony/"
          target="blank"
          className="home"
        >
          <AiFillHome />
          <p>Início</p>
        </a>

        <a
          href="https://www.linkedin.com/in/hamartrony/"
          target="blank"
          className="home"
        >
          <BsFillBagDashFill />
          <p>Projetos</p>
        </a>

        <a
          href="https://www.linkedin.com/in/hamartrony/"
          target="blank"
          className="home"
        >
          <FaUserAlt />
          <p>Sobre</p>
        </a>

        <a
          href="https://www.linkedin.com/in/hamartrony/"
          target="blank"
          className="home"
        >
          <BsFillChatRightDotsFill />
          <p>Contato</p>
        </a>
        <div className="menu">
          <a
            href="https://www.linkedin.com/in/hamartrony/"
            target="blank"
            className="home"
          >
            <CgMenuGridR />
          </a>
        </div>
      </div>
    </HeadDiv>
  );
};
