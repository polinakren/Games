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

const game = {
  id: 540,
  title: 'Overwatch 2',
  thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
  short_description: 'A hero-focused first-person team shooter from Blizzard Entertainment.',
  game_url: 'https://www.freetogame.com/open/overwatch-2',
  genre: 'Shooter',
  platform: 'PC (Windows)',
  publisher: 'Activision Blizzard',
  developer: 'Blizzard Entertainment',
  release_date: '2022-10-04',
  freetogame_profile_url: 'https://www.freetogame.com/overwatch-2',
};

export default function Game() {
  const { game: id } = useParams<{ game: string }>();

  const { game, isLoading } = useGameCardApi(id!);

  const new_release_date = new Date(game?.release_date).toLocaleDateString();

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
