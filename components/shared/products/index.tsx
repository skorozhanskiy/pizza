import React from 'react';
import { PizzaCard } from '../../shared/pizza-card';
import { SectionContainer } from '../../shared/section-container';
import { Flex } from 'antd';

interface Props {
  className?: string;
}
const pizza = [{ titleName: 'Комбо', id: 'Комбо' }];
export const Products: React.FC<Props> = ({ className }) => {
  return (
    <Flex className={className} style={{ flexDirection: 'column', marginBottom: '90px' }}>
      <SectionContainer id="Пиццы" titleName="Пиццы 6:14" categoryId={1}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
      <SectionContainer id="Комбо" titleName=" Комбо" categoryId={2}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
      <SectionContainer id="Закуски" titleName=" Закуски" categoryId={3}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
      <SectionContainer id="Коктейли" titleName=" Коктейли" categoryId={4}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
      <SectionContainer id="Кофе" titleName=" Кофе" categoryId={5}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
      <SectionContainer id="Напитки" titleName=" Напитки" categoryId={6}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
      <SectionContainer id="Десерты" titleName=" Десерты" categoryId={7}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
    </Flex>
  );
};
