import { Categories, Filters, Products } from '@/components/shared';
import Title from 'antd/es/typography/Title';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '250px 1fr',
        gridTemplateRows: 'auto',
        rowGap: '20px',
        columnGap: '40px',
      }}>
      <div
        style={{
          gridColumn: '1/3',
          gridRow: '1',
          paddingTop: '20px',
          backgroundColor: 'white',
        }}>
        <Title
          level={2}
          style={{
            fontWeight: 800,
            fontSize: 36,
            lineHeight: '49px',
            marginBottom: '0px',
          }}>
          Все пиццы
        </Title>
      </div>
      <div
        style={{
          gridColumn: '1/3',
          gridRow: '2',
          position: 'sticky',
          top: 0,
          paddingTop: '20px',
          paddingBottom: '20px',
          backgroundColor: 'white',
          // boxShadow: '-1px 76px 28px -8px rgba(34, 60, 80, 0.07)',
          zIndex: 1,
        }}>
        <Categories />
      </div>
      <div style={{ gridColumn: '1', gridRow: '3' }}>
        <Filters />
      </div>
      <div style={{ gridColumn: '2', gridRow: '3' }}>
        {categories.map(
          (category) =>
            category.products.length > 0 && (
              <Products
                categoryId={category.id}
                key={category.id}
                titleName={category.name}
                items={category.products}
              />
            ),
        )}
      </div>
    </div>
  );
}
