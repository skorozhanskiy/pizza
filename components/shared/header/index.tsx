import React from 'react';
import { Logo, Users, Basket } from '@/components/shared';
import { Flex } from 'antd';

import { GeneralSearch } from '@/components/ui';
import { SearchAutoComplete } from '@/components/ui';

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
        {/* <GeneralSearch placeholder="Поиск..." style={{ maxWidth: '400px', minHeight: '40px' }} /> */}
        <SearchAutoComplete />
        <Flex className={styles.content}>
          <Users />
          <Basket />
        </Flex>
      </Flex>
    </Flex>
  );
};
