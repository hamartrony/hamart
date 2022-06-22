import { CardsDiv } from "./style";

function Cards({ title, empresas }) {
  return (
    <CardsDiv>
      <h2>{title}</h2>
      {empresas.map((item) => (
        <div className="item">
          <img src={item.img} alt="imagem"></img>
          <h3>{item.sub}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </CardsDiv>
  );
}

export default Cards;
