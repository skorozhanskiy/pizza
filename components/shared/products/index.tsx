import React from 'react';
import { PizzaCard } from '../../shared/pizza-card';
import { SectionContainer } from '../../shared/section-container';
import { Flex } from 'antd';

interface Props {
  titleName: string;
  categoryId: number;
  items: any[];
}

export async function Products({ titleName, categoryId, items }: Props) {
  return (
    <Flex style={{ flexDirection: 'column', marginBottom: '90px' }}>
      <SectionContainer id={titleName} titleName={titleName} categoryId={categoryId}>
        {items.map((item) => (
          <PizzaCard
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            productName={item.name}
            productPrice={item.price}
            productDescription={item.productDescription}
          />
        ))}
      </SectionContainer>
    </Flex>
  );
}
