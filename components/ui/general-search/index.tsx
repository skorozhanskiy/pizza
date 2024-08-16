import React from 'react';
import { Input, ConfigProvider } from 'antd';

interface Props {
  className?: string;
  placeholder?: string;
  onChange?: any;
  style?: any;
  onFocus?: any;
  onBlur?: any;
  value?: string;
  onClick?: any;
}
// const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

export const GeneralSearch: React.FC<Props> = ({
  className,
  placeholder,
  style,
  onChange,
  onFocus,
  onBlur,
  value,
  onClick,
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            borderRadius: 15,
            activeBorderColor: '#fe5d0056',
            hoverBorderColor: 'none',
            activeShadow: '0 0 0 2px #fe5d0056',
          },
        },
      }}>
      <Input
        allowClear
        placeholder={placeholder}
        style={style}
        className={className}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onClick={onClick}
      />
    </ConfigProvider>
  );
};
