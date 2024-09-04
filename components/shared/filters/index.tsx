'use client';
import React, { useEffect } from 'react';
import { SpecialOffers, InputNumberPrice, Ingredients } from '@/components/shared';
import { Flex, InputNumberProps } from 'antd';
import Title from 'antd/es/typography/Title';
import { useIngredients } from '@/hooks/use-filter-ingredients';
import qs from 'qs';
import { useRouter } from 'next/navigation';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();

  const {
    selectIngredients,
    toggleIngredients,
    promotionsValue,
    togglePromotions,
    inputMoreValue,
    setinputMoreValue,
    inputLessValue,
    setinputLessValue,
  } = useIngredients();
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
  useEffect(() => {
    const obj = {
      promotions: Array.from(promotionsValue),
      selectIngredients: Array.from(selectIngredients),
      inputLessValue: Number(inputLessValue),
      inputMoreValue: Number(inputMoreValue),
    };
    console.log('перезагрузка страницы при переходе по ссылке');
    const queryString = qs.stringify(obj, { arrayFormat: 'comma' });
    router.push(`?${queryString}`, {
      scroll: false,
    });
  }, [promotionsValue, selectIngredients, inputLessValue, inputMoreValue]);

  return (
    <Flex style={{ flexDirection: 'column', gap: '15px', position: 'sticky', top: 110 }}>
      <Title level={2} style={{ fontWeight: 800, marginBottom: '0px' }}>
        Фильтрация
      </Title>
      <SpecialOffers checked={togglePromotions} />
      <InputNumberPrice
        onChangeMore={onChangeMore}
        onChangeLess={onChangeLess}
        inputMoreValue={inputMoreValue}
        inputLessValue={inputLessValue}
        setinputMoreValue={setinputMoreValue}
        setinputLessValue={setinputLessValue}
      />
      <Ingredients checked={toggleIngredients} />
    </Flex>
  );
};
