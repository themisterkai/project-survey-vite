import { PropTypes } from 'prop-types';
import parse from 'html-react-parser';

import { generateStory } from '../constants';

export const Story = ({ state }) => {
  return <div>{parse(generateStory({ ...state }))}</div>;
};

Story.propTypes = {
  state: PropTypes.object.isRequired,
};
