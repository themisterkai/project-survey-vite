import { PropTypes } from 'prop-types';

export const Name = ({ state, setState, propToChange }) => {
  return (
    <div>
      <input
        onChange={e => setState({ ...state, [propToChange]: e.target.value })}
        value={state[propToChange]}
      ></input>
    </div>
  );
};

Name.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  propToChange: PropTypes.string.isRequired,
};
