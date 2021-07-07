import { CardContainer, CardImg } from "./Card.Styles";

function Card({to, id, img, name }) {
  return (
    <CardContainer to={to}>
      <CardImg src={img} alt={name} />
    </CardContainer>
  );
}

export default Card;
