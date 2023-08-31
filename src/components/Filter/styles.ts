import styled from '@emotion/styled';
import { Checkbox, Form, Radio, Typography } from 'antd';
import { Palette } from '~utils/Palette';

export const Spacer = styled.div`
  min-width: 150px;
  padding: 32px;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0 0 14px 0 rgba(176, 165, 209, 0.4);
`;

export const StyledTitle = styled(Typography)`
  color: ${Palette.secondary_800};
  font-size: 20px;
  font-weight: 865;
`;

export const StyledCheckboxTitle = styled(Typography)`
  margin-bottom: 12px;
  color: ${Palette.secondary_800};
  font-size: 14px;
  font-weight: 700;
`;

export const StyledBlock = styled.div`
  margin-top: 24px;
`;

export const StyledRadio = styled(Radio)`
  display: block;
  
  .ant-radio-checked .ant-radio-inner {
    background-color: ${Palette.primary_600};
    border-color: ${Palette.primary_600};
  }

  .ant-radio:hover .ant-radio-inner {
    background-color: ${Palette.white_100};
    border-color: ${Palette.white_500};
  }

  :where(.css-dev-only-do-not-override-17a39f8).ant-radio-wrapper:hover .ant-radio-checked:not(.ant-radio-disabled) .ant-radio-inner {
    background-color: ${Palette.primary_700};
    border-color: transparent;
  }
`;

export const StyledFormItem = styled(Form.Item)`
  flex-direction: column;
  gap: 12px;
`;
