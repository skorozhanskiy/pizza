'	use client';
import React from 'react';
import { Checkbox, Flex, ConfigProvider } from 'antd';
import type { CheckboxProps } from 'antd';

interface Props {
  className?: string;
  onChange?: any;
}

export const CheckboxGroop: React.FC<CheckboxProps> = ({ name, onChange }) => {
  return (
    <Flex style={{ flexDirection: 'column', gap: '10px' }} className="no-select">
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
        <Checkbox onChange={onChange} style={{ color: '#000000', fontWeight: 600 }}>
          {name}
        </Checkbox>
      </ConfigProvider>
    </Flex>
  );
};
