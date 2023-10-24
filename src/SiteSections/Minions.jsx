import { PropTypes } from 'prop-types';

export const Minions = ({ state, setState }) => {
  return (
    <div>
      <div className="minionCount">{state.minions} minions</div>
      <input
        type="range"
        min="3"
        max="20"
        onChange={e => setState({ ...state, minions: e.target.value })}
        value={state.minions}
      ></input>
    </div>
  );
};

Minions.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};
