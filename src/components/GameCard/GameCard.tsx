import { Spacer, StyledImg, StyledName, StyledTitle } from './styles';

import { routeNames } from '~services/router';
import { useNavigate } from '~services/router/hooks';

export const GameCard = ({ game }: { game: Game }) => {
  const navigate = useNavigate();
  const { thumbnail, id, release_date, title, developer, genre } = game;

  const handleClick = () => {
    navigate({ name: routeNames.game, params: { game: id } });
  };

  const new_release_date = new Date(release_date).toLocaleDateString();

  return (
    <Spacer onClick={handleClick}>
      <StyledImg src={thumbnail} alt={title} />
      <div>
        <StyledTitle>Title</StyledTitle>
        <StyledName>{title}</StyledName>
      </div>
      <div>
        <StyledTitle>Release date</StyledTitle>
        <StyledName>{new_release_date}</StyledName>
      </div>
      <div>
        <StyledTitle>Developer</StyledTitle>
        <StyledName>{developer}</StyledName>
      </div>
      <div>
        <StyledTitle>Genre</StyledTitle>
        <StyledName>{genre}</StyledName>
      </div>
    </Spacer>
  );
};
