import { Categories } from '@/components/shared';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { Filters, SectionContainer } from '@/components/shared';
import { PizzaCard } from '@/components/shared/pizza-card';
export default function Home() {
  return (
    <Flex style={{ flexDirection: 'column', gap: '50px' }}>
      <Flex style={{ flexDirection: 'column' }}>
        <Title level={1} style={{ fontWeight: 800 }}>
          Все пиццы
        </Title>
        <Categories />
      </Flex>
      <Flex style={{ gap: '50px' }}>
        <Flex style={{ width: '250px', flexDirection: 'column', gap: '20px' }}>
          <Title level={2} style={{ fontWeight: 800 }}>
            Фильтрация
          </Title>
          <Filters />
        </Flex>
        <Flex style={{ flexDirection: 'column', gap: '30px' }}>
          <SectionContainer titleName={'Пиццы'}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
          </SectionContainer>
          <SectionContainer titleName={'Комбо'}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
          </SectionContainer>
          <SectionContainer titleName={'Закуски'}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
          </SectionContainer>
          <SectionContainer titleName={'Коктейли'}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
          </SectionContainer>
          <SectionContainer titleName={'Кофе'}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
          </SectionContainer>
          <SectionContainer titleName={'Напитки'}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
          </SectionContainer>
          <SectionContainer titleName={'Десерты'}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
          </SectionContainer>
        </Flex>
      </Flex>
    </Flex>
  );
}
