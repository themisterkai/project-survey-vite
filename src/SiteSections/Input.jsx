import { PropTypes } from 'prop-types';

export const Input = ({
  state,
  setState,
  propToChange,
  section,
  setSection,
}) => {
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      setSection(section + 1);
    }
  };
  return (
    <div className="input">
      <input
        onKeyDown={handleKeyDown}
        onChange={e => setState({ ...state, [propToChange]: e.target.value })}
        value={state[propToChange]}
      ></input>
    </div>
  );
};

Input.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  propToChange: PropTypes.string.isRequired,
  section: PropTypes.number.isRequired,
  setSection: PropTypes.func.isRequired,
};
