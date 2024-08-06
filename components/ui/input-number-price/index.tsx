'use client';
import React from 'react';
import type { InputNumberProps } from 'antd';
import { Flex, InputNumber, Slider, ConfigProvider } from 'antd';
import Title from 'antd/es/typography/Title';
interface Props {
  className?: string;
}

const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};

export const InputNumberPrice: React.FC<Props> = ({ className }) => {
  return (
    <Flex style={{ flexDirection: 'column', gap: '15px' }}>
      <ConfigProvider
        theme={{
          components: {
            Slider: {
              trackBg: '#fe5f00',
              trackHoverBg: '#fe5f00',
              handleActiveColor: '#fe5f00',
              handleColor: '#fe5f00',
              colorPrimaryBorderHover: '#fe5f00',
              handleActiveOutlineColor: '#fe5d003a',
            },
          },
        }}>
        <Title level={4} style={{ fontWeight: 800, marginBottom: '0px' }}>
          Цена от и до:
        </Title>
        <Flex style={{ gap: '15px' }}>
          <InputNumber min={100} max={2000} defaultValue={500} onChange={onChange} changeOnWheel />
          <InputNumber min={100} max={2000} defaultValue={2000} onChange={onChange} changeOnWheel />
        </Flex>
        <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
      </ConfigProvider>
    </Flex>
  );
};
