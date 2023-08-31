import { Dropdown, Typography, Skeleton } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

import { SortBlock, Spacer, StyledPagination, StyledSkeleton, StyledSort, StyledSpace, StyledTitle } from './styles';
import { GamesList } from '../GamesList';
import { GameFilterValues } from '../Filter';

type GamesProps = {
  games: Game[];
  isLoading: boolean;
  onFilterChange: (filter: GameFilterValues) => void;
};

export const Games = ({ games, isLoading, onFilterChange }: GamesProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedGames = games?.length ? games.slice(startIndex, endIndex) : [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Spacer>
      <SortBlock>
        <StyledTitle>{isLoading ? `Games` : `Games (${games?.length})`}</StyledTitle>
        <Dropdown
          menu={{
            items: items.map(item => ({ key: item.key, value: item.value, label: item.label })),
            selectable: true,
            // @ts-ignore
            onSelect: v => onFilterChange({ sort_by: items[v.key].value }),
          }}
        >
          <Typography.Link>
            <StyledSpace>
              <StyledSort>Sort by</StyledSort>
              <DownOutlined />
            </StyledSpace>
          </Typography.Link>
        </Dropdown>
      </SortBlock>
      {isLoading ? (
        <>
          {[...Array(3)].map((item, index) => (
            <StyledSkeleton key={index}>
              <Skeleton key={index} avatar={{ shape: 'circle' }} active />
              {[...Array(4)].map((item, index) => (
                <Skeleton.Input size={'large'} key={index} />
              ))}
            </StyledSkeleton>
          ))}
        </>
      ) : (
        <>
          <GamesList games={displayedGames} />
          <StyledPagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={games.length}
            onChange={handlePageChange}
          />
        </>
      )}
    </Spacer>
  );
};

const items = [
  { key: '0', label: 'Alphabetical', value: 'alphabetical' },
  { key: '1', label: 'Popularity', value: 'popularity' },
  { key: '2', label: 'Release date', value: 'release-date' },
];
