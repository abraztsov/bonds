import React from 'react';
import { withState } from 'recompose';

const enhance = withState('state', 'setState', { value: '' });

const SelectList = ({
  onChange,
  options = [],
  state,
  setState,
  defaultValue
}) => (
  <select
    value={state.value || defaultValue}
    onChange={e => {
      const value = e.target.value;
      setState({ value });
      onChange({ event: e, value });
    }}
  >
    {options.map(value => (
      <option value={value} key={value}>
        {value}
      </option>
    ))}
  </select>
);

export { SelectList };
export default enhance(SelectList);
