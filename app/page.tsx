import { Categories } from '@/components/shared';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { Filters, SectionContainer } from '@/components/shared';
import { PizzaCard } from '@/components/shared/pizza-card';
export default function Home() {
  return (
    <Flex
      style={{
        flexDirection: 'column',
        gap: '50px',
      }}>
      <Flex
        style={{
          flexDirection: 'column',
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          width: '100%',
          paddingBottom: '20px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          zIndex: 1,
        }}>
        <Flex
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            flexDirection: 'column',
            backgroundColor: 'white',
            width: '100%',
          }}>
          <Title level={1} style={{ fontWeight: 800, marginBottom: '20px', position: 'static' }}>
            Все пиццы
          </Title>
        </Flex>
        <Flex
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            flexDirection: 'column',
            backgroundColor: 'white',
            width: '100%',
          }}>
          <Categories />
        </Flex>
      </Flex>
      <Flex style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Flex style={{ gap: '50px' }}>
          <Flex
            style={{
              width: '250px',
              flexDirection: 'column',
              gap: '20px',
            }}>
            <Filters />
          </Flex>
          <Flex style={{ flexDirection: 'column', gap: '30px' }}>
            <SectionContainer name={'Пиццы'}>
              <PizzaCard />
              <PizzaCard />
              <PizzaCard />
              <PizzaCard />
              <PizzaCard />
              <PizzaCard />
              <PizzaCard />
              <PizzaCard />
            </SectionContainer>
            <SectionContainer name={'Комбо'}>
              <PizzaCard />
              <PizzaCard />
              <PizzaCard />
            </SectionContainer>
            <SectionContainer name={'Закуски'}>
              <PizzaCard />
              <PizzaCard />
              <PizzaCard />
            </SectionContainer>
            <SectionContainer name={'Коктейли'}>
              <PizzaCard />
              <PizzaCard />
              <PizzaCard />
            </SectionContainer>
            <SectionContainer name={'Кофе'}>
              <PizzaCard />
              <PizzaCard />
              <PizzaCard />
            </SectionContainer>
            <SectionContainer name={'Напитки'}>
              <PizzaCard />
              <PizzaCard />
              <PizzaCard />
            </SectionContainer>
            <SectionContainer name={'Десерты'}>
              <PizzaCard />
              <PizzaCard />
              <PizzaCard />
            </SectionContainer>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
