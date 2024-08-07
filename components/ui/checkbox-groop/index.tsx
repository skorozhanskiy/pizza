'	use client';
import React from 'react';
import { Checkbox, Flex, ConfigProvider } from 'antd';
import type { CheckboxProps } from 'antd';

interface Props {
  className?: string;
}

export const CheckboxGroop: React.FC<CheckboxProps> = ({ name }) => {
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
        <Checkbox style={{ color: '#000000', fontWeight: 600 }}>{name}</Checkbox>
      </ConfigProvider>
    </Flex>
  );
};
