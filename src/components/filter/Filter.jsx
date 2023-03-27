import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onFilter} />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};
