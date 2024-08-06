import React from 'react';

import { Logo, Users, Basket } from '@/components/shared';
import { Flex } from 'antd';

import styles from './header.module.scss';
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = () => {
  return (
    <Flex className="main-container">
      <Flex className={styles.container}>
        <Flex className={styles.content}>
          <Logo />
        </Flex>
        <Flex className={styles.content}>
          <Users />
          <Basket />
        </Flex>
      </Flex>
    </Flex>
  );
};
