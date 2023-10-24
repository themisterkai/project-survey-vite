import { PropTypes } from 'prop-types';

export const RadioButton = ({ state, setState, options, propToChange }) => {
  return (
    <div>
      {options.map(option => (
        <p key={option.value}>
          <input
            type="radio"
            value={option.value}
            onChange={e =>
              setState({ ...state, [propToChange]: e.target.value })
            }
            checked={option.value === state[propToChange]}
          />
          {option.label}
        </p>
      ))}
    </div>
  );
};

RadioButton.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  propToChange: PropTypes.string.isRequired,
};
