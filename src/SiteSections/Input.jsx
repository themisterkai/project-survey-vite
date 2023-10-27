import { PropTypes } from 'prop-types';

export const Input = ({
  state,
  setState,
  propToChange,
  section,
  setSection,
  validate,
  maxLength = 15,
}) => {
  const handleKeyUp = e => {
    validate(e.target.value);
    if (e.key === 'Enter' && state.error === '' && state[propToChange] !== '') {
      setState({
        ...state,
        [propToChange]: e.target.value,
      });
      setSection(section + 1);
    }
  };
  return (
    <div className="input">
      <input
        onKeyUp={handleKeyUp}
        onChange={e =>
          setState({
            ...state,
            [propToChange]: e.target.value.trimStart().toLowerCase(),
          })
        }
        value={state[propToChange]}
        maxLength={maxLength}
        autoComplete="off"
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
  validate: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
};
