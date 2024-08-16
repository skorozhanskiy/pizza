'use client';
import React from 'react';
import { GeneralSearch } from '@/components/ui';
import styles from './search-products.module.scss';
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
          className={styles.container}
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
      </div>
    </>
  );
};
