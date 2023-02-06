import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';


export const Filter = ({ value, onChange }) => (
  <div>
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={value}
        onChange={onChange}
        type="text"
      />
    </FilterLabel>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

