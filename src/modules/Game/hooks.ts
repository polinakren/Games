import { useQuery } from 'react-query';
import { notification } from 'antd';

const GET_GAME = 'GET_GAME';

export const useGameCardApi = (id: string) => {
  const queryKey = [GET_GAME];
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=' + id;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0e22d739e8msh1827224440866c1p138428jsnff4c40abf941',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  };

  const queryFn = async () => {
    const response = await fetch(url, options);

    if (!response.ok) {
      notification.error({ message: 'Failed to execute the request', placement: 'topRight', duration: 0 });
    }

    return await response.json();
  };

  const { data: game, isLoading } = useQuery(queryKey, queryFn, { retry: 3 });

  return {
    game,
    isLoading,
  };
};
