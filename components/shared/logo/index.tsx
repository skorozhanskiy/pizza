import Title from 'antd/es/typography/Title';
import React from 'react';
import Text from 'antd/es/typography/Text';
import { Flex } from 'antd';
import Link from 'next/link';
interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <Link href="/">
      <Flex style={{ alignItems: 'center', gap: '15px' }} className={className}>
        <img src="/logo.svg" alt="logo" />
        <Flex style={{ flexDirection: 'column' }} className="">
          <Title level={2} style={{ fontWeight: 800, marginBottom: '0PX' }}>
            NEXT PIZZA
          </Title>
          <Text style={{ fontWeight: 400, fontSize: 16, color: '#7B7B7B' }}>
            Самая вкусная пицца во вселенной
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};
