'use client';
import React from 'react';
import { CheckboxGroop, InputNumberPrice } from '@/components/ui';
import { Ingredients } from '@/components/shared';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
interface Props {
  className?: string;
}

const list = [
  { id: 1, name: 'Акции' },
  { id: 2, name: 'Новинки' },
];

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <Flex style={{ flexDirection: 'column', gap: '15px', position: 'sticky', top: 110 }}>
      <Title level={2} style={{ fontWeight: 800, marginBottom: '0px' }}>
        Фильтрация
      </Title>
      {list.map((item) => (
        <CheckboxGroop
          onChange={() => {
            console.log(item.name);
          }}
          key={item.id}
          name={item.name}
        />
      ))}
      <InputNumberPrice />
      <Ingredients />
    </Flex>
  );
};
