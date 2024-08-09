import React from 'react';
import { PizzaCard } from '../../shared/pizza-card';
import Title from 'antd/es/typography/Title';

interface Props {
  className?: string;
}

export const Products: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div id="Пиццы" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        <Title level={2} style={{ fontWeight: 800, marginBottom: '0px' }}>
          Пиццы
        </Title>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '50px',
          }}>
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </div>
      </div>
      <div
        className=""
        id="Комбо"
        style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        <Title level={2} style={{ fontWeight: 800, marginBottom: '0px' }}>
          Пиццы
        </Title>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '50px',
          }}>
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </div>
      </div>
      <div
        className=""
        id="Закуски"
        style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        <Title level={2} style={{ fontWeight: 800, marginBottom: '0px' }}>
          Пиццы
        </Title>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '50px',
          }}>
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </div>
      </div>
    </div>
  );
};
