import styled from '@emotion/styled';
import { Pagination, Space, Typography } from 'antd';
import { Palette } from '~utils/Palette';

export const Spacer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled(Typography)`
  color: ${Palette.secondary_800};
  font-size: 20px;
  font-weight: 865;
`;

export const StyledSort = styled(Typography)`
  color: ${Palette.primary_600};
  font-size: 14px;
`;

export const StyledSpace = styled(Space)`
  color: ${Palette.primary_600};
`;

export const SortBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledPagination = styled(Pagination)`
  margin-top: 20px;
  
  .ant-pagination-item-active {
    border-color: ${Palette.primary_600};
  }
  
  .ant-pagination-item-active a {
    color: ${Palette.primary_600};
  }
`;

export const StyledSkeleton = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;
  padding: 22px;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0 0 14px 0 rgba(176, 165, 209, 0.4);
`;
