'use client';
import React from 'react';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store';
interface Props {
  className?: string;
  titleName?: string;
  children?: React.ReactNode;
  categoryId: number;
}

export const SectionContainer: React.FC<Props> = ({
  className,
  titleName,
  children,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
      console.log(categoryId, titleName);
    }
  }, [categoryId, intersection?.isIntersecting, titleName]);
  return (
    <Flex
      id={titleName}
      ref={intersectionRef}
      className={className}
      style={{ flexDirection: 'column', gap: '20px' }}>
      <Title level={2} style={{ fontWeight: 800, marginBottom: '0px' }}>
        {titleName}
      </Title>
      <Flex style={{ justifyContent: 'space-around', flexWrap: 'wrap', gap: '50px' }}>
        {children}
      </Flex>
    </Flex>
  );
};
