import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = ({ onChange }) => {
  return (
    <Label htmlFor="name">
      Find contacts by name
      <Input type="text" name="name" onChange={onChange} />
    </Label>
  );
};

export { Filter };

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
