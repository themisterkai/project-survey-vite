import { PropTypes } from 'prop-types';

import { pronounOptions } from '../constants';

export const Pronouns = ({ state, setState }) => {
  return (
    <div>
      <select
        value={state.pronoun}
        onChange={e => setState({ ...state, pronoun: e.target.value })}
      >
        {pronounOptions.map(pronoun => (
          <option key={pronoun.value} value={pronoun.value}>
            {pronoun.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Pronouns.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};
