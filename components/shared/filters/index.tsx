'use client';
import React, { useEffect } from 'react';
import { SpecialOffers, InputNumberPrice, Ingredients } from '@/components/shared';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { useIngredients } from '@/hooks/use-filter-ingredients';
import qs from 'qs';
import { useRouter } from 'next/navigation';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();

  const { selectIngredients, toggleIngredients, promotionsValue, togglePromotions } =
    useIngredients();

  useEffect(() => {
    const obj = {
      promotions: Array.from(promotionsValue),
      selectIngredients: Array.from(selectIngredients),
    };
    const queryString = qs.stringify(obj, { arrayFormat: 'comma' });

    router.push(`?${queryString}`, {
      scroll: false,
    });
  }, [promotionsValue, selectIngredients]);

  return (
    <Flex style={{ flexDirection: 'column', gap: '15px', position: 'sticky', top: 110 }}>
      <Title level={2} style={{ fontWeight: 800, marginBottom: '0px' }}>
        Фильтрация
      </Title>
      <SpecialOffers checked={togglePromotions} />
      <InputNumberPrice />
      <Ingredients checked={toggleIngredients} />
    </Flex>
  );
};
