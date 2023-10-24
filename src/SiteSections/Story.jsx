import { PropTypes } from 'prop-types';
import { generateStory } from '../constants';

export const Story = ({ state }) => {
  return <div>{generateStory({ ...state })}</div>;
};

Story.propTypes = {
  state: PropTypes.object.isRequired,
};
