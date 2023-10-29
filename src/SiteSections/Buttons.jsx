import { PropTypes } from 'prop-types';

import { initialState } from '../constants';

export const Buttons = ({
  sectionIndex,
  setSectionIndex,
  currentSection,
  sectionLength,
  state,
  setState,
}) => {
  const hasError = state.error !== '';
  const increase = () => setSectionIndex(sectionIndex + 1);
  const decrease = () => {
    if (state.error !== '') {
      setState({ ...state, [currentSection.property]: '', error: '' });
    }
    setSectionIndex(sectionIndex - 1);
  };

  const disabled = state[currentSection.property] === '' || hasError;
  return (
    <div className="buttons">
      <span className="button-span">
        {sectionIndex === 0 && (
          <>
            <button onClick={() => increase()} disabled={disabled}>
              Start
            </button>
          </>
        )}
        {sectionIndex === 1 && (
          <>
            <button onClick={() => increase()} disabled={disabled}>
              Next
            </button>
          </>
        )}
        {sectionIndex > 1 && sectionIndex < sectionLength - 2 && (
          <>
            <button onClick={() => decrease()}>Previous</button>
            <button onClick={() => increase()} disabled={disabled}>
              Next
            </button>
          </>
        )}
        {sectionIndex === sectionLength - 2 && (
          <>
            <button onClick={() => decrease()}>Previous</button>
            <button onClick={() => increase()} disabled={disabled}>
              Submit
            </button>
          </>
        )}
        {sectionIndex === sectionLength - 1 && (
          <>
            <button
              onClick={() => {
                setState(initialState);
                setSectionIndex(0);
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
            >
              Create a new story
            </button>
          </>
        )}
      </span>
    </div>
  );
};

Buttons.propTypes = {
  sectionIndex: PropTypes.number.isRequired,
  setSectionIndex: PropTypes.func.isRequired,
  currentSection: PropTypes.object.isRequired,
  sectionLength: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};
