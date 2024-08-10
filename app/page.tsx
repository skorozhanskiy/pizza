import { Categories, Filters, Products } from '@/components/shared';
import Title from 'antd/es/typography/Title';

export default function Home() {
  return (
    <div
      className=""
      style={{
        display: 'grid',
        gridTemplateColumns: '250px 1fr',
        gridTemplateRows: 'auto',
        rowGap: '20px',
        columnGap: '40px',
      }}>
      <div
        className=""
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
        className=""
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
      <div className="" style={{ gridColumn: '1', gridRow: '3' }}>
        <Filters />
      </div>
      <div className="" style={{ gridColumn: '2', gridRow: '3' }}>
        <Products />
      </div>
    </div>
  );
}
