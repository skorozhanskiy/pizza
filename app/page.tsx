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
        gap: '40px',
      }}>
      <div
        className=""
        style={{
          gridColumn: '1/3',
          gridRow: '1',
          position: 'sticky',
          top: 0,
          paddingTop: '20px',
          paddingBottom: '30px',
          backgroundColor: 'white',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
          zIndex: 1,
        }}>
        <Title
          level={2}
          style={{
            fontWeight: 800,
            fontSize: 36,
            lineHeight: '49px',
            marginBottom: '15px',
          }}>
          Все пиццы
        </Title>
        <Categories />
      </div>
      <div className="" style={{ gridColumn: '1', gridRow: '2' }}>
        <Filters />
      </div>
      <div className="" style={{ gridColumn: '2', gridRow: '2' }}>
        <Products />
      </div>
    </div>
  );
}
