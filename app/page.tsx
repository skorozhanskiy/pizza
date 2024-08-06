import { Categories } from '@/components/shared';
import Title from 'antd/es/typography/Title';
export default function Home() {
  return (
    <div>
      <Title level={1} style={{ fontWeight: 800 }}>
        Все пиццы
      </Title>
      <Categories />
    </div>
  );
}
