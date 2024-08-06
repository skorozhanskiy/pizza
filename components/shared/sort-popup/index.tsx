'use client';
import React from 'react';
import type { CascaderProps } from 'antd';
import { Select, ConfigProvider, Cascader, Button } from 'antd';
import { ArrowUpDown } from 'lucide-react';

// const handleChange = (value: { value: string; label: React.ReactNode }) => {
//   console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
// };

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'по популярности',
    label: 'по популярности',
  },
  {
    value: 'по убыванию цены',
    label: 'по убыванию цены',
  },
  {
    value: 'по возрастанию цены',
    label: 'по возрастанию цены',
  },
];
interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  const [text, setText] = React.useState('по популярности');

  const onChange: CascaderProps<Option>['onChange'] = (_, selectedOptions) => {
    setText(selectedOptions.map((o) => o.label).join(', '));
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Cascader: {
            fontSize: 16,
            optionSelectedFontWeight: 700,
            lineHeight: 1.5,
            optionPadding: '8px 10px',
            menuPadding: 6,

            borderRadiusSM: 5,
            marginXS: 440,
          },
          Button: {
            fontSize: 16,
            fontWeight: 700,
            borderRadius: 15,
            colorLink: 'rgb(32, 32, 32)',
            colorLinkHover: 'rgb(32, 32, 32)',
            lineWidthFocus: 1,
          },
        },
      }}>
      <div className={className}>
        <Cascader options={options} onChange={onChange}>
          <Button
            style={{ width: '100%', minHeight: 40, backgroundColor: '#FAFAFA' }}
            icon={<ArrowUpDown size={16} />}
            type="link">
            Сортировка: &nbsp;
            <span style={{ color: 'rgb(254, 95, 0)' }}>{text}</span>
          </Button>
        </Cascader>
      </div>
    </ConfigProvider>
  );
};
