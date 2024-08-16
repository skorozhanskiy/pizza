import React from 'react';
import { Logo, Users, Basket } from '@/components/shared';
import { Flex } from 'antd';

import { SearchProducts } from '../search-products';

import styles from './header.module.scss';
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = () => {
  return (
    <Flex className={styles.container}>
      <Flex className={styles.wrapper}>
        <Flex className={styles.content}>
          <Logo />
        </Flex>
        <SearchProducts className={styles.search} />
        <Flex className={styles.content}>
          <Users />
          <Basket />
        </Flex>
      </Flex>
    </Flex>
  );
};
