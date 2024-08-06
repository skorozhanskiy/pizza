import React from 'react';
import { CheckboxGroop, InputNumberPrice } from '@/components/ui';
import { Flex } from 'antd';
interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <Flex style={{ flexDirection: 'column', gap: '15px' }}>
      <CheckboxGroop />
      <InputNumberPrice />
    </Flex>
  );
};
