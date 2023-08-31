import { categories } from '~utils/categories';
import { Spacer, StyledBlock, StyledRadio, StyledCheckboxTitle, StyledTitle } from './styles';
import { Form, Radio } from 'antd';

export interface GameFilterValues {
  category?: string;
  platform?: string;
  sort_by?: string;
}

export const Filter = ({ onFilterChange }: { onFilterChange: (filter: GameFilterValues) => void }) => {
  return (
    <Spacer>
      <Form onValuesChange={v => onFilterChange(v)}>
        <StyledTitle>Filters</StyledTitle>

        <StyledBlock>
          <StyledCheckboxTitle>Platform</StyledCheckboxTitle>
          <Form.Item name='platform'>
            <Radio.Group>
              <StyledRadio value={'PC'}>PC (Windows)</StyledRadio>
              <StyledRadio value={'browser'}>Web Browser</StyledRadio>
            </Radio.Group>
          </Form.Item>
        </StyledBlock>

        <StyledBlock>
          <StyledCheckboxTitle>Category</StyledCheckboxTitle>
          <Form.Item name='category'>
            <Radio.Group>
              {categories.map(category => (
                <StyledRadio value={category.name} key={category.id}>
                  {category.name}
                </StyledRadio>
              ))}
            </Radio.Group>
          </Form.Item>
        </StyledBlock>
      </Form>
    </Spacer>
  );
};
