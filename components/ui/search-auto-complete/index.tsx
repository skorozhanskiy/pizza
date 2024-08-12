'use client';
import React from 'react';
import { AutoComplete, Input, ConfigProvider } from 'antd';
import type { AutoCompleteProps } from 'antd';

const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer">
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

interface Props {
  className?: string;
}

export const SearchAutoComplete: React.FC<Props> = ({ className }) => {
  const [options, setOptions] = React.useState<AutoCompleteProps['options']>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              borderRadius: 15,
              activeBorderColor: '#fe5d0056',
              hoverBorderColor: 'none',
              activeShadow: 'none',
            },
          },
        }}>
        <AutoComplete
          popupMatchSelectWidth={252}
          style={{ width: '100%', maxWidth: '400px', minHeight: '40px', fontWeight: 400 }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
          size="large">
          <Input.Search size="large" placeholder="Поиск..." allowClear />
        </AutoComplete>
      </ConfigProvider>
    </>
  );
};
