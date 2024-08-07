import React from 'react';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';

interface Props {
  className?: string;
  titleName?: string;
  children?: React.ReactNode;
}

export const SectionContainer: React.FC<Props> = ({ className, titleName, children }) => {
  return (
    <Flex className={className} style={{ flexDirection: 'column', gap: '20px' }}>
      <Title level={1} style={{ fontWeight: 800, marginBottom: '0px' }}>
        {titleName}
      </Title>
      <Flex style={{ justifyContent: 'space-around', flexWrap: 'wrap', gap: '50px' }}>
        {children}
      </Flex>
    </Flex>
  );
};
