'use client';
import React, { useEffect } from 'react';
import { CheckboxGroop, InputNumberPrice } from '@/components/ui';
import { Ingredients } from '@/components/shared';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { useIngredients } from '@/hooks/use-filter-ingredients';
import qs from 'qs';
import { useRouter } from 'next/navigation';

interface Props {
  className?: string;
}

const list = [
  { id: 1, name: 'Акции' },
  { id: 2, name: 'Новинки' },
];

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();

  const { selectIngredients, toggleIngredients, promotions, togglePromotions } = useIngredients();

  useEffect(() => {
    const obj = {
      promotions: Array.from(promotions),
      selectIngredients: Array.from(selectIngredients),
    };
    const queryString = qs.stringify(obj, { arrayFormat: 'comma' });

    router.push(`?${queryString}`, {
      scroll: false,
    });
  }, [promotions, selectIngredients]);

  return (
    <Flex style={{ flexDirection: 'column', gap: '15px', position: 'sticky', top: 110 }}>
      <Title level={2} style={{ fontWeight: 800, marginBottom: '0px' }}>
        Фильтрация
      </Title>
      {list.map((item) => (
        <CheckboxGroop
          onChange={() => {
            togglePromotions(item.id);
          }}
          key={item.id}
          name={item.name}
        />
      ))}
      <InputNumberPrice />
      <Ingredients checked={toggleIngredients} />
    </Flex>
  );
};
