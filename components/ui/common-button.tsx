import React from 'react';
import { Button, ConfigProvider } from 'antd';

interface Props {
  buttonName: string;
  className?: string;
  buttonIcons?: string;
  buttonType?: any;
  disabled?: boolean;
  style?: any;
  onClick?: any;
  children?: React.ReactNode;
}

export const CommonButton: React.FC<Props> = ({
  className,
  buttonName,
  buttonIcons,
  buttonType,
  disabled,
  style,
  onClick,
}) => {
  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        components: {
          Button: {
            colorPrimary: '#202020',
            algorithm: false, // Enable algorithm
            lineWidth: 0,
            borderRadius: 15,
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 22,
            defaultHoverColor: '#FE5F00',
            defaultActiveColor: '#FE5F00',
            defaultShadow: 'none',
            defaultBg: '#f9fafb',
          },
        },
      }}>
      <Button
        style={style}
        disabled={disabled}
        type={buttonType}
        className={className}
        icon={buttonIcons}
        onClick={onClick}>
        {buttonName}
      </Button>
    </ConfigProvider>
  );
};
