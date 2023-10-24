import { PropTypes } from 'prop-types';

export const Range = ({ state, setState, min, max, propToChange }) => {
  return (
    <div>
      <div className="range">{state.minions}</div>
      <input
        type="range"
        min={min}
        max={max}
        onChange={e => setState({ ...state, [propToChange]: e.target.value })}
        value={state[propToChange]}
      ></input>
    </div>
  );
};

Range.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  propToChange: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
