'use client';
import React from 'react';
import { GeneralSearch } from '@/components/ui';
import styles from './search-products.module.scss';
import { Flex } from 'antd';
import Link from 'next/link';
interface Props {
  className?: string;
}

export const SearchProducts: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundColor: '#00000080',
          zIndex: 100,
          display: focused ? 'block' : 'none',
        }}></div>
      <div className={className}>
        <GeneralSearch
          onChange={() => {}}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Поиск..."
          style={{
            width: '100%',
            maxWidth: '400px',
            minHeight: '40px',
            zIndex: 150,
          }}
        />
        <div
          className={`${focused && styles.focused} ${styles.container} ${
            focused ? true : 'hidden'
          }`}>
          <Link href="#" className={styles.link}>
            <img
              src="https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif"
              width={32}
              height={32}
              alt="изображение продукта"
            />
            <span>5:38</span>
          </Link>
        </div>
      </div>
    </>
  );
};
