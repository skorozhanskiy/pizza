import React from 'react';
import { Input, ConfigProvider } from 'antd';

interface Props {
  className?: string;
  placeholder?: string;

  style?: any;
}
// const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

export const GeneralSearch: React.FC<Props> = ({ className, placeholder, style }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            borderRadius: 15,
            activeBorderColor: 'rgba(254, 93, 0)',
            hoverBorderColor: 'none',
            activeShadow: '0 0 0 2px rgba(254, 93, 0, 0.192)',
          },
        },
      }}>
      <Input placeholder={placeholder} style={style} className={className} />
    </ConfigProvider>
  );
};
