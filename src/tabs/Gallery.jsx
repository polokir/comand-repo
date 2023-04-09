import { Component, useEffect, useState } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export const Gallery = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const handleSubmit = query => {
    setQuery(query);
  };
  useEffect(() => {
    if (!query) return;

    ImageService.getImages(query, page).then(res => console.log(res));
  }, [query, page]);
  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <Text textAlign="center">Sorry. There are no images ... 😭</Text>
    </>
  );
};
