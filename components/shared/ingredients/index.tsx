'use client';
import React from 'react';
import Title from 'antd/es/typography/Title';
import { Button, Flex, ConfigProvider } from 'antd';
import { CheckboxGroop, GeneralSearch } from '@/components/ui';

interface Props {
  className?: string;
  limit?: number;
}

const list = [
  { id: 1, name: 'Сырный соус' },
  { id: 2, name: 'Моццарелла' },
  { id: 3, name: 'Чеснок' },
  { id: 4, name: 'Соленые огурчики' },
  { id: 5, name: 'Красный лук' },
  { id: 6, name: 'Томаты' },
  { id: 7, name: 'Сырный соус' },
  { id: 8, name: 'итальянские травы ' },
  { id: 9, name: 'фирменный соус альфредо' },
];
const limit = 6;
const listLimit = list.slice(0, limit);

export const Ingredients: React.FC<Props> = ({ className }) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const onclick = () => {
    setShowAll(!showAll);
    console.log(listLimit);
  };

  // const listLimit = showAll ? list : list.filter((item) => item.name.includes(limit + '10'));

  return (
    <Flex style={{ flexDirection: 'column', gap: '15px' }} className={className}>
      <Title level={4} style={{ fontWeight: 800, marginBottom: '0px' }}>
        Ингредиенты:
      </Title>

      <GeneralSearch placeholder="Поиск ингредиента" />

      <Flex style={{ flexDirection: 'column', gap: '5px' }}>
        {listLimit.map((item) => (
          <CheckboxGroop key={item.id} name={item.name} />
        ))}
      </Flex>
      <Button onClick={onclick} style={{ fontWeight: 700, fontSize: 16, textAlign: 'left' }}>
        {showAll ? 'Скрыть' : ' Показать все'}
      </Button>
    </Flex>
  );
};
