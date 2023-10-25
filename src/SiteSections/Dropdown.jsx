import { PropTypes } from 'prop-types';

export const Dropdown = ({ state, setState, options, propToChange }) => {
  return (
    <div className="dropdown">
      <select
        value={state[propToChange]}
        onChange={e => setState({ ...state, [propToChange]: e.target.value })}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  propToChange: PropTypes.string.isRequired,
};
