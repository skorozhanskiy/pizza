import { Button, Flex } from 'antd';
import React from 'react';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import { ConfigProvider } from 'antd';
import { Plus } from 'lucide-react';

import styles from './pizza-card.module.scss';

interface Props {
  id: string;
  imageUrl: string;
  productName: string;
  productDescription: string;
  productPrice: number;
}

export const PizzaCard: React.FC<Props> = ({
  id,
  imageUrl,
  productName,
  productDescription,
  productPrice,
}) => {
  return (
    <Flex id={id} className={styles.container}>
      <Flex className={styles.images_container}>
        <img src={imageUrl} alt={productName} className={styles.images} />
      </Flex>
      <Flex className={styles.text}>
        <Title
          level={4}
          className={styles.title}
          style={{
            marginBottom: 0,
            fontWeight: 700,
            fontSize: 22,
            lineHeight: '30px',
            color: '#000000',
          }}>
          {productName}
        </Title>
        <Paragraph
          className={styles.description}
          style={{
            marginBottom: 0,
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '21px',
            color: '#B1B1B1',
          }}>
          {productDescription}
        </Paragraph>
      </Flex>
      <Flex className={styles.price}>
        <span>
          <span style={{ fontWeight: 400, fontSize: 22, lineHeight: '32px' }}>от&nbsp;</span>
          <span style={{ fontWeight: 700, fontSize: 22, lineHeight: '32px' }}>
            <span>{productPrice}</span>
            &nbsp;<span>₽</span>
          </span>
        </span>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                fontSize: 16,
                fontWeight: 700,
                borderRadius: 15,
                defaultBorderColor: '#fff',
                defaultBg: '#FFFAF4',
                defaultColor: '#fe5f00',
                defaultActiveBorderColor: '#fe5f00',
                defaultActiveColor: '#fe5f00',
                defaultHoverBorderColor: '#fe5f00',
                defaultHoverColor: '#fe5f00',
                defaultHoverBg: '#FFFAF4',
                controlHeight: 40,
                defaultShadow: 'none',
              },
            },
          }}>
          <Button icon={<Plus size={16} />}>Добавить</Button>
        </ConfigProvider>
      </Flex>
    </Flex>
  );
};
