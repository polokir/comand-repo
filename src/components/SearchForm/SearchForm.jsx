import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useContext } from 'react';
import testContext from 'context/testContext';

export const SearchForm = ({ handleSubmit }) => {
  const data = useContext(testContext);
  // console.log(data);
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
