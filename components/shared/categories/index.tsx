'use client';
import React from 'react';
import { CommonButton } from '../../ui';
import { SortPopup } from '@/components/shared';
import { Flex } from 'antd';

import { useCategoryStore } from '@/store';
import styles from './categories.module.scss';

interface Props {
  className?: string;
}

const list = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Кофе' },
  { id: 6, name: 'Напитки' },
  { id: 7, name: 'Десерты' },
];

export const Categories: React.FC<Props> = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <Flex className={styles.container}>
      <Flex className={styles.block}>
        {list.map((item) => (
          <CommonButton
            onClick={() => useCategoryStore.getState().setActiveId(item.id)}
            key={item.id}
            style={{ padding: '20px 15px', minWidth: '77px' }}
            buttonName={item.name}
            className={categoryActiveId === item.id ? `${styles.active}` : ''}
          />
        ))}
      </Flex>
      <Flex className={styles.block}>
        <SortPopup />
      </Flex>
    </Flex>
  );
};
