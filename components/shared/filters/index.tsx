import React from 'react';
import { CheckboxGroop, InputNumberPrice } from '@/components/ui';
import { Ingredients } from '@/components/shared';
import { Flex } from 'antd';
interface Props {
  className?: string;
}

const list = [
  { id: 1, name: 'Можно собирать' },
  { id: 2, name: 'Новинки' },
];

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <Flex style={{ flexDirection: 'column', gap: '15px' }}>
      {list.map((item) => (
        <CheckboxGroop key={item.id} name={item.name} />
      ))}
      <InputNumberPrice />
      <Ingredients />
    </Flex>
  );
};
