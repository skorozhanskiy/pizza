import React from 'react';
import { PizzaCard } from '../../shared/pizza-card';
import Title from 'antd/es/typography/Title';
import { SectionContainer } from '../../shared/section-container';

interface Props {
  className?: string;
}
const pizza = [{ titleName: 'Комбо', id: 'Комбо' }];
export const Products: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <SectionContainer titleName="Пиццы" categoryId={1}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
      <SectionContainer titleName=" Комбо" categoryId={2}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
      <SectionContainer titleName=" Закуски" categoryId={3}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
      <SectionContainer titleName=" Коктейли" categoryId={4}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
      <SectionContainer titleName=" Кофе" categoryId={5}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
      <SectionContainer titleName=" Напитки" categoryId={6}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
      <SectionContainer titleName=" Десерты" categoryId={7}>
        <PizzaCard />
        <PizzaCard />
      </SectionContainer>
    </div>
  );
};
