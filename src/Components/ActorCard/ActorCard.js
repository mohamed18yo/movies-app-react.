import { ActorImage, CardContainer } from "./ActorCard.Style";
import { Link } from "react-router-dom";
import { InfoText } from "../../Screen/Movie/movie.style";

function ActorCard({ img, name, id }) {
  return (
    <CardContainer as={Link} to={""}>
      <ActorImage src={img} alt={name} />
      <InfoText margin={"20px"} fontSize={16} fontWeight={700}>
        {name}
      </InfoText>
    </CardContainer>
  );
}

export default ActorCard;