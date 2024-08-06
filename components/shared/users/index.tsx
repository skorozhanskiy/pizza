import React from 'react';
import { Button, ConfigProvider } from 'antd';
import { User } from 'lucide-react';

interface Props {
  className?: string;
}

export const Users: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 15,
              defaultBorderColor: 'rgb(254, 95, 0)',
              defaultBg: '#fff',
              defaultColor: 'rgb(254, 95, 0)',
              defaultActiveBorderColor: 'rgb(254, 95, 0)',
              defaultActiveColor: 'rgb(254, 95, 0)',
              defaultHoverBorderColor: 'rgb(254, 95, 0)',
              defaultHoverColor: 'rgb(254, 95, 0)',
              controlHeight: 40,
            },
          },
        }}>
        <Button icon={<User size={16} />}>Войти</Button>
      </ConfigProvider>
    </div>
  );
};
