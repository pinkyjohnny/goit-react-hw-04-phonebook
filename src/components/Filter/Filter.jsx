import React from 'react';
import { Input } from './Filter.styled';

export const Filter = ({ filter, onChangeInputValue }) => {
  return (
    <div>
      <Input
        type="text"
        placeholder=" Contact Name"
        value={filter}
        onChange={e => onChangeInputValue(e.target.value)}
      />
    </div>
  );
};
