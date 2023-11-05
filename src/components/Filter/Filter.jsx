import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ filter, onChangeInputValue }) => {
  return (
    <div>
      <Input
        type="text"
        placeholder=" Contact Name"
        value={filter}
        name="filter"
        onChange={onChangeInputValue}
      />
    </div>
  );
};

Filter.propTypes = {
  onChangeInputValue: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
