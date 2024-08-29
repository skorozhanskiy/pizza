'use client';
import React from 'react';
import type { InputNumberProps } from 'antd';
import { Flex, InputNumber, Slider, ConfigProvider } from 'antd';
import Title from 'antd/es/typography/Title';

interface Props {
  className?: string;
}

export const InputNumberPrice: React.FC<Props> = ({ className }) => {
  const [inputMoreValue, setinputMoreValue] = React.useState(1000);
  const [inputLessValue, setinputLessValue] = React.useState(0);

  const onChangeMore: InputNumberProps['onChange'] = (value) => {
    if (isNaN(value as number)) {
      return;
    }
    setinputMoreValue(value as number);
  };
  const onChangeLess: InputNumberProps['onChange'] = (value) => {
    if (isNaN(value as number)) {
      return;
    }
    setinputLessValue(value as number);
  };

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
            InputNumber: {
              hoverBorderColor: '#fe5f00',
              activeBorderColor: '#fe5f00',
              handleHoverColor: '#fe5f00',
            },
          },
        }}>
        <Title level={4} style={{ fontWeight: 800, marginBottom: '0px' }}>
          Цена от и до:
        </Title>
        <Flex style={{ gap: '15px' }}>
          <InputNumber
            min={0}
            max={1000}
            style={{ margin: '0 16px' }}
            step={1}
            value={inputLessValue}
            onChange={onChangeLess}
          />
          <InputNumber
            min={0}
            max={1000}
            style={{ margin: '0 16px' }}
            step={1}
            value={inputMoreValue}
            onChange={onChangeMore}
          />
        </Flex>
        <Slider
          min={0}
          max={1000}
          step={1}
          range={{ draggableTrack: true }}
          value={[inputLessValue, inputMoreValue]}
          onChange={(value: number[]) => {
            setinputMoreValue(value[1]);
            setinputLessValue(value[0]);
          }}
        />
      </ConfigProvider>
    </Flex>
  );
};
