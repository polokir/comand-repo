import { Component, useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');
  const onSubmitHandler = e => {
    e.preventDefault();
    handleSubmit(query);
    setQuery('');
  };
  return (
    <SearchFormStyled onSubmit={onSubmitHandler}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </SearchFormStyled>
  );
};
