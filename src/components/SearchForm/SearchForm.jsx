import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Form } from './SearchForm.styled';

export const SearchForm = ({ setQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.elements.query.value });
    event.target.reset();
  };

  useEffect(() => {
    setQuery(query);
  }, [searchParams, query, setQuery]);

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="query" />
      </label>
      <button type="submit">Search</button>
    </Form>
  );
};

SearchForm.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
