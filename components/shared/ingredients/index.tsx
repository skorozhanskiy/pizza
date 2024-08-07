'use client';
import React from 'react';
import Title from 'antd/es/typography/Title';
import { Button, Flex, ConfigProvider } from 'antd';
import { CheckboxGroop, GeneralSearch } from '@/components/ui';

interface Props {
  className?: string;
  limit?: number;
  e?: any;
}

const list = [
  { id: 1, name: 'сырный соус' },
  { id: 2, name: 'Моццарелла' },
  { id: 3, name: 'чеснок' },
  { id: 4, name: 'соленые огурчики' },
  { id: 5, name: 'красный лук' },
  { id: 6, name: 'томаты' },
  { id: 7, name: 'соус песто' },
  { id: 8, name: 'итальянские травы ' },
  { id: 9, name: 'фирменный соус альфредо' },
];
const limit = 5;
const listLimit = list;

export const Ingredients: React.FC<Props> = ({ className }) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const listItem = showAll
    ? listLimit.filter((item) => item.name.toLocaleLowerCase().includes(searchValue))
    : list.slice(0, limit);
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
          onChange={(e: any) => onSearch(e.target.value)}
          placeholder="Поиск ингредиента"
        />
      )}
      <Flex style={{ flexDirection: 'column', gap: '5px', maxHeight: '250px', overflow: 'auto' }}>
        {listItem.map((item) => (
          <CheckboxGroop key={item.id} name={item.name} />
        ))}
      </Flex>
      {list.length > limit && (
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
