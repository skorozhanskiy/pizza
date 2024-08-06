'use client';
import React from 'react';
import { CommonButton } from '../ui';
import { Flex } from 'antd';

import { useCategoryStore } from '@/store';

interface Props {
  className?: string;
}

const list = [
  { id: 1, name: 'Все' },
  { id: 2, name: 'Мясные' },
  { id: 3, name: 'Острые' },
  { id: 4, name: 'Салаты' },
  { id: 5, name: 'Напитки' },
  { id: 6, name: 'Десерты' },
  { id: 7, name: 'Закуски' },
];

export const Categories: React.FC<Props> = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <Flex className="categories-container">
      {list.map((item) => (
        <CommonButton
          onClick={() => useCategoryStore.getState().setActiveId(item.id)}
          key={item.id}
          style={{ padding: '25px 20px', minWidth: '77px' }}
          buttonName={item.name}
          className={categoryActiveId === item.id ? 'active' : 'red'}
        />
      ))}
    </Flex>
  );
};
