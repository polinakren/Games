import styled from '@emotion/styled';
import { useState } from 'react';

import { Filter, GameFilterValues, Games } from '~components';
import { useGameApi } from '~modules/Main/hooks';

export interface FilterGames {
  platform?: string;
  category?: string;
  sort_by?: string;
}

export default function Main() {
  const [filter, setFilter] = useState<GameFilterValues>(defaultFilter);

  const { games, isLoading } = useGameApi(filter);

  const onFilterChange = (filterParams: GameFilterValues) => {
    setFilter(filter => ({ ...filter, ...filterParams }));
  };

  return (
    <Spacer>
      <Filter onFilterChange={onFilterChange} />
      <Games games={games} isLoading={isLoading} onFilterChange={onFilterChange} />
    </Spacer>
  );
}

const Spacer = styled.div`
  max-width: 70%;
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const defaultFilter = {
  category: '',
  sort_by: '',
  platform: '',
};
