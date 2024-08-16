'use client';
import React from 'react';
import { GeneralSearch } from '@/components/ui';
import styles from './search-products.module.scss';
import Link from 'next/link';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import { useDebounce } from 'react-use';
interface Props {
  className?: string;
}

export const SearchProducts: React.FC<Props> = ({ className }) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [searchQery, setsearchQery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  useDebounce(
    () => {
      Api.products.search(searchQery).then((items) => {
        setProducts(items);
      });
    },
    500,
    [searchQery],
  );

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
          onChange={(e: any) => {
            setsearchQery(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200) && setsearchQery('')}
          placeholder="Поиск..."
          value={searchQery}
          style={{
            width: '100%',
            maxWidth: '400px',
            minHeight: '40px',
            zIndex: 150,
            backgroundColor: '#f7f7f7',
            fontSize: 19,
          }}
        />
        {products.length > 0 && (
          <div
            className={`${focused && styles.focused} ${styles.container} ${
              focused ? true : 'hidden'
            }`}>
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className={styles.link}>
                <img src={product.imageUrl} width={32} height={32} alt={product.name} />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
