import { ButtonLink } from "./style";

function Link({ text, page, color, handlePage }) {
  return (
    <ButtonLink backgroundColor={color}>
      <button onClick={() => handlePage(page)}>{text}</button>
    </ButtonLink>
  );
}

export default Link;
