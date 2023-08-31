import { GameCard } from '../GameCard';
import { Spacer } from './styles';

export const GamesList = ({ games }: { games: Game[] }) => {
  return (
    <Spacer>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </Spacer>
  );
};
