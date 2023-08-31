import styled from '@emotion/styled';
import { Typography } from 'antd';
import { Palette } from '~utils/Palette';

export const Spacer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 22px;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0 0 14px 0 rgba(176, 165, 209, 0.4);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 25px 0 rgba(159, 140, 220, 0.7);
  }
`;

export const StyledTitle = styled(Typography)`
  color: ${Palette.white_600};
  font-size: 14px;
  font-weight: 500;
`;

export const StyledName = styled(Typography)`
  color: ${Palette.secondary_800};
  font-size: 14px;
  font-weight: 500;
`;

export const StyledImg = styled.img`
  width: 60%;
  border-radius: 50px;
`;
