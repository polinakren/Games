import { useQuery } from 'react-query';
import { FilterGames } from '~modules/Main/Main';
import { notification } from 'antd';

const GET_GAMES = 'GET_GAMES';

export const useGameApi = (req: FilterGames = {}) => {
  const queryKey = [GET_GAMES, req.category, req.sort_by, req.platform];

  const url = getUrl(req);

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

  const { data: games, isLoading } = useQuery(queryKey, queryFn, { retry: 3 });

  return {
    games,
    isLoading,
  };
};

const getUrl = ({ platform, sort_by, category }: FilterGames) => {
  if (!platform && !sort_by && !category) {
    return 'https://free-to-play-games-database.p.rapidapi.com/api/games';
  }

  const queryParameters = [];

  if (platform !== '') {
    const value = 'platform=' + platform?.toLowerCase();
    queryParameters.push(value);
  }

  if (sort_by !== '') {
    const value = 'sort-by=' + sort_by?.toLowerCase();
    queryParameters.push(value);
  }

  if (category !== '') {
    const value = 'category=' + category?.toLowerCase();
    queryParameters.push(value);
  }

  return 'https://free-to-play-games-database.p.rapidapi.com/api/games?' + queryParameters.join('&');
};
