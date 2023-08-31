import { useParams } from 'react-router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import {
  ScreenBlock,
  Spacer,
  StyledCard,
  StyledImg,
  StyledName,
  StyledScreen,
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
        <Spin />
      ) : (
        <Spacer>
          <ArrowLeftOutlined onClick={handleClick} />
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
            <StyledSystemTitle>Minimum System Requirements (Windows)</StyledSystemTitle>
            <StyledCard>
              <div>
                <StyledTitle>OS</StyledTitle>
                <StyledName>{game.minimum_system_requirements.os}</StyledName>
              </div>
              <div>
                <StyledTitle>Memory</StyledTitle>
                <StyledName>{game.minimum_system_requirements.memory}</StyledName>
              </div>
              <div>
                <StyledTitle>Storage</StyledTitle>
                <StyledName>{game.minimum_system_requirements.storage}</StyledName>
              </div>
              <div>
                <StyledTitle>Processor</StyledTitle>
                <StyledName>{game.minimum_system_requirements.processor}</StyledName>
              </div>
              <div>
                <StyledTitle>Graphics</StyledTitle>
                <StyledName>{game.minimum_system_requirements.graphics}</StyledName>
              </div>
              <div>
                <StyledTitle>Additional Notes</StyledTitle>
                <StyledName>Specifications may change during development</StyledName>
              </div>
            </StyledCard>
            <ScreenBlock>
              {game.screenshots.map(screen => (
                <StyledScreen src={screen.image} key={screen.id} alt={'screenshot'} />
              ))}
            </ScreenBlock>
          </StyledSystem>
        </Spacer>
      )}
    </>
  );
}
