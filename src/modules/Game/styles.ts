import styled from '@emotion/styled';
import { Carousel, Typography } from 'antd';
import { Palette } from '~utils/Palette';

export const StyledCard = styled.div`
  min-width: 20%;
  display: flex;
  flex-direction: column;
  padding: 28px;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0 0 14px 0 rgba(176, 165, 209, 0.4);
  cursor: pointer;
`;

export const DescBlock = styled.div`
  margin-bottom: 20px;
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

export const StyledScreen = styled.img`
  width: 30%;
  border-radius: 50px;
`;

export const ScreenBlock = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 28px;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0 0 14px 0 rgba(176, 165, 209, 0.4);
`;

export const Spacer = styled.div`
  max-width: 70%;
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export const StyledSystem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSystemTitle = styled(Typography)`
  margin-bottom: 20px;
  color: ${Palette.secondary_800};
  font-size: 20px;
  font-weight: 865;
`;

export const StyledCarousel = styled(Carousel)`
  margin-top: 20px;
  width: 300px;
`;
