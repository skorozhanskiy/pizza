'use client';
import React from 'react';
import Title from 'antd/es/typography/Title';
import { Button, Flex, ConfigProvider, Spin } from 'antd';
import { CheckboxGroop, GeneralSearch } from '@/components/ui';
import { useIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
  limit?: number;
  e?: any;
}

const limit = 5;

export const Ingredients: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const listLimit = ingredients;
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const listItem = showAll
    ? listLimit.filter((item) => item.name.toLocaleLowerCase().includes(searchValue))
    : ingredients.slice(0, 6);
  const onclick = () => {
    setShowAll(!showAll);
  };

  const onSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <Flex style={{ flexDirection: 'column', gap: '20px' }} className={className}>
      <Title level={4} style={{ fontWeight: 800, marginBottom: '0px' }}>
        Ингредиенты:
      </Title>
      {showAll && (
        <GeneralSearch
          style={{ minHeight: '40px' }}
          onChange={(e: any) => onSearch(e.target.value)}
          placeholder="Поиск ингредиента"
        />
      )}
      {loading ? (
        <ConfigProvider
          theme={{
            components: {
              Spin: {
                colorPrimary: '#fe5f00',
              },
            },
          }}>
          <Spin size="large" />
        </ConfigProvider>
      ) : (
        <Flex style={{ flexDirection: 'column', gap: '5px', maxHeight: '250px', overflow: 'auto' }}>
          {listItem.map((item) => (
            <CheckboxGroop key={item.id} name={item.name} />
          ))}
        </Flex>
      )}
      {ingredients.length > limit && (
        <ConfigProvider
          theme={{
            components: {
              Button: {
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 15,
                defaultBorderColor: 'rgb(254, 95, 0)',
                defaultBg: '#fff',
                defaultColor: 'rgb(254, 95, 0)',
                defaultActiveBorderColor: 'rgb(254, 95, 0)',
                defaultActiveColor: 'rgb(254, 95, 0)',
                defaultHoverBorderColor: 'rgb(254, 95, 0)',
                defaultHoverColor: 'rgb(254, 95, 0)',
                controlHeight: 35,
              },
            },
          }}>
          <Button onClick={onclick} style={{ fontWeight: 700, fontSize: 16, textAlign: 'left' }}>
            {showAll ? 'Скрыть' : ' Показать все'}
          </Button>
        </ConfigProvider>
      )}
    </Flex>
  );
};
