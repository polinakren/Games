import { useParams } from 'react-router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import {
  Spacer,
  StyledCard,
  StyledImg,
  StyledName,
  StyledSystem,
  StyledSystemTitle,
  StyledTitle,
} from '~modules/Game/styles';
import { useGameCardApi } from '~modules/Game/hooks';
import { useNavigate } from '~services/router/hooks';
import { routeNames } from '~services/router';

export default function Game() {
  const navigate = useNavigate();

  const { game: id } = useParams<{ game: string }>();
  const { game, isLoading } = useGameCardApi(id!);

  const new_release_date = new Date(game?.release_date).toLocaleDateString();

  const handleClick = () => {
    navigate({ name: routeNames.main });
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <Spacer>
          <StyledCard>
            <StyledImg src={game.thumbnail} alt={game.title} />
            <>
              <StyledTitle>Title</StyledTitle>
              <StyledName>{game.title}</StyledName>
            </>
            <>
              <StyledTitle>Release date</StyledTitle>
              <StyledName>{new_release_date}</StyledName>
            </>
            <>
              <StyledTitle>Developer</StyledTitle>
              <StyledName>{game.developer}</StyledName>
            </>
            <>
              <StyledTitle>Publisher</StyledTitle>
              <StyledName>{game.publisher}</StyledName>
            </>
            <>
              <StyledTitle>Genre</StyledTitle>
              <StyledName>{game.genre}</StyledName>
            </>
          </StyledCard>

          <StyledSystem>
            <ArrowLeftOutlined onClick={handleClick} />
            <StyledSystemTitle>Minimum System Requirements (Windows)</StyledSystemTitle>
            <StyledCard>
              <div>
                <StyledTitle>OS</StyledTitle>
                <StyledName>Window 7 or later</StyledName>
              </div>
              <div>
                <StyledTitle>Memory</StyledTitle>
                <StyledName>2 GB</StyledName>
              </div>
              <div>
                <StyledTitle>Storage</StyledTitle>
                <StyledName>1500 MB</StyledName>
              </div>
              <div>
                <StyledTitle>Processor</StyledTitle>
                <StyledName>Dual core from Intel or AMD at 2.8 GHz</StyledName>
              </div>
              <div>
                <StyledTitle>Graphics</StyledTitle>
                <StyledName>Intel HD 3000</StyledName>
              </div>
              <div>
                <StyledTitle>Additional Notes</StyledTitle>
                <StyledName>Specifications may change during development</StyledName>
              </div>
            </StyledCard>
          </StyledSystem>
        </Spacer>
      )}
    </>
  );
}
