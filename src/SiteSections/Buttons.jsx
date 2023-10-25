import { PropTypes } from 'prop-types';

import { siteSections, initialState } from '../constants';

export const Buttons = ({ section, setSection, state, setState }) => {
  const hasError = state.error !== '';
  const increase = () => setSection(section + 1);
  const decrease = () => {
    if (state.error !== '') {
      setState({ ...state, [siteSections[section].property]: '', error: '' });
    }
    setSection(section - 1);
  };

  const disabled = state[siteSections[section].property] === '' || hasError;
  return (
    <div className="buttons">
      <span className="button-span">
        {section === 0 && (
          <>
            <button onClick={() => increase()} disabled={disabled}>
              Next
            </button>
          </>
        )}
        {section !== 0 && section < 5 && (
          <>
            <button onClick={() => decrease()}>Previous</button>
            <button onClick={() => increase()} disabled={disabled}>
              Next
            </button>
          </>
        )}
        {section === 5 && (
          <>
            <button onClick={() => decrease()}>Previous</button>
            <button onClick={() => increase()} disabled={disabled}>
              Submit
            </button>
          </>
        )}
        {section === 6 && (
          <>
            <button
              onClick={() => {
                setState(initialState);
                setSection(0);
              }}
            >
              Restart
            </button>
          </>
        )}
      </span>
    </div>
  );
};

Buttons.propTypes = {
  section: PropTypes.number.isRequired,
  setSection: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};
