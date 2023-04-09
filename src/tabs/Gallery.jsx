import { Component, useEffect, useState } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';
import Loader from '../components/Loader/Loader';

export const Gallery = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isShowLoadMore, setIsShowLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setIsEmpty(false);
  };
  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    ImageService.getImages(query, page)
      .then(res => {
        if (res.photos.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages(prevImages => [...prevImages, ...res.photos]);
        setIsShowLoadMore(page < Math.ceil(res.total_results / 15));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <Grid>
        {images.map(({ id, avg_color, src, alt }) => (
          <GridItem key={id}>
            <CardItem color={avg_color}>
              <img src={src.large} alt={alt} />
            </CardItem>
          </GridItem>
        ))}
      </Grid>
      {isShowLoadMore && <Button onClick={handleLoadMore}>Load more</Button>}
      {isEmpty && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}
      {error && (
        <Text textAlign="center">{error} There are no images ... 😭</Text>
      )}
      {isLoading && <Loader />}
    </>
  );
};
