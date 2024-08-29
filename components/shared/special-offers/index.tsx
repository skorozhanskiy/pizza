import React from 'react';
import { CheckboxGroop } from '@/components/ui';
import { useIngredients } from '@/hooks/use-filter-ingredients';
import { Spin, ConfigProvider, Flex } from 'antd';

interface Props {
  className?: string;
  checked: any;
  name?: string;
}

export const SpecialOffers: React.FC<Props> = ({ className, checked }) => {
  const { promotions, loading } = useIngredients();
  return (
    <Flex style={{ flexDirection: 'column', gap: '20px' }}>
      {loading ? (
        <ConfigProvider
          theme={{
            components: {
              Spin: {
                colorPrimary: '#fe5f00',
              },
            },
          }}>
          <Spin size="large" />
        </ConfigProvider>
      ) : (
        <Flex style={{ flexDirection: 'column', gap: '5px', maxHeight: '250px', overflow: 'auto' }}>
          {promotions.map((item) => (
            <CheckboxGroop
              onChange={() => {
                checked(item.id);
              }}
              key={item.id}
              name={item.name}
            />
          ))}
        </Flex>
      )}
    </Flex>
  );
};
