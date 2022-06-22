import { useState } from "react";
import { Head } from "./components/head/head";
import Link from "./components/links/link";
import { AppDiv } from "./styles";
import js from "./images/javascript.svg";
import html from "./images/html.svg";
import css from "./images/css.svg";
import { Contato } from "./components/contato/contato";
import { Projetos } from "./components/projetos/projetos";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { Sobre } from "./components/sobre/sobre";
import somosKenzie from "./images/coverkenzie.png";
import hamart from "./images/hamartPerfil.png";

function App() {
  const [modulo, setModulo] = useState("home");

  const handlePage = (page) => {
    setModulo(page);
  };

  return (
    <AppDiv modulo={modulo}>
      <div className="main">
        <Head />
        {modulo === "contato" && <Contato handlePage={handlePage} />}
        {modulo === "projetos" && <Projetos handlePage={handlePage} />}
        {modulo === "sobre" && <Sobre handlePage={handlePage} />}
        {modulo === "home" && <></>}
        <div className="content">
          <section>
            <div className="imagens">
              <img src={hamart} alt="hamart icon" className="hamart"></img>
              <img src={somosKenzie} alt="Kenzie Wallpaper icon"></img>
            </div>
            <div className="text">
              <h2>Hamart Rony</h2>
              <h3>
                Desenvolvedor Front End | Fullstack | JavaScript | React | Git |
                Node | HTML | CSS
              </h3>
              <p>Curitiba, Paraná, Brasil</p>
              <p className="font2">Informaçoes de contato</p>
              <p className="font2">39 conexões</p>
            </div>
            <div className="links">
              <button className="sobre">Mais sobre mim...</button>
              <button className="contato">Contatos Hamart</button>
              <button className="mais">Mais</button>
              <div className="descr">
                <h2>Buscando emprego</h2>
                <p>Cargos Desenvolvedor front-end e Desenvolvedor da web</p>
                <p className="font2">Ver todos os detalhes</p>
              </div>
            </div>
          </section>

          <aside>
            <div className="links">
              <button className="sobre">Mais sobre mim...</button>
              <button className="contato">Contatos Hamart</button>
              <button className="mais">Mais</button>
              <div className="descr">
                <h2>Buscando emprego</h2>
                <p>Cargos Desenvolvedor front-end e Desenvolvedor da web</p>
                <p className="font2">Ver todos os detalhes</p>
              </div>
            </div>
          </aside>

          <aside>
            <div className="links">
              <button className="sobre">Mais sobre mim...</button>
              <button className="contato">Contatos Hamart</button>
              <button className="mais">Mais</button>
              <div className="descr">
                <h2>Buscando emprego</h2>
                <p>Cargos Desenvolvedor front-end e Desenvolvedor da web</p>
                <p className="font2">Ver todos os detalhes</p>
              </div>
            </div>
          </aside>
        </div>

        <footer>
          <h2>Hamart Rony</h2>
          <p>Desenvolvimento Web</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/hamartrony/" target="blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/hamartrony" target="blank">
              <AiFillGithub />
            </a>
            <a href="mailto:hamart23@hotmail.com">
              <MdMarkEmailRead />
            </a>
          </div>
        </footer>
      </div>
    </AppDiv>
  );
}

export default App;
