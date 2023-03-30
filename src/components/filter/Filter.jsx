const Filter = ({ state, onChange }) => {
  return (
    <label htmlFor="name">
      Find contacts by name
      <input type="text" name="name" onChange={onChange} />
    </label>
  );
};

export { Filter };
