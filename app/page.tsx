import { Categories } from '@/components/shared';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { Filters } from '@/components/shared';
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
      <Flex style={{ gap: '20px' }}>
        <Flex style={{ width: '250px', flexDirection: 'column', gap: '20px' }}>
          <Title level={2} style={{ fontWeight: 800 }}>
            Фильтрация
          </Title>
          <Filters />
        </Flex>
        <Flex
          style={{ width: '100%', gap: '30px', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </Flex>
      </Flex>
    </Flex>
  );
}
