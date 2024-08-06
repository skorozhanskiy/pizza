'	use client';
import React from 'react';
import { Checkbox, Flex, ConfigProvider } from 'antd';
import type { CheckboxProps } from 'antd';

import styles from './checkbox-groop.module.scss';
interface Props {
  className?: string;
}

const list = [
  { id: 1, name: 'Можно собирать' },
  { id: 2, name: 'Новинки' },
];
export const CheckboxGroop: React.FC<CheckboxProps> = ({ className }) => {
  return (
    <Flex style={{ flexDirection: 'column', gap: '10px' }}>
      <ConfigProvider
        theme={{
          components: {
            Checkbox: {
              colorPrimary: '#fe5f00',
              colorPrimaryHover: '#fe5f00',
              controlInteractiveSize: 21,
              fontSize: 17,
              borderRadiusSM: 6,
            },
          },
        }}>
        {list.map((item) => (
          <Checkbox key={item.id} style={{ color: '#000000', fontWeight: 600 }}>
            {item.name}
          </Checkbox>
        ))}
      </ConfigProvider>
    </Flex>
  );
};
