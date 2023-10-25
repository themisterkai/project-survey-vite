import { PropTypes } from 'prop-types';
import parse from 'html-react-parser';

import { generateStory, getTitle } from '../constants';
import { Header } from './Header';

export const Story = ({ state }) => {
  return (
    <div>
      <Header text={getTitle({ ...state })} />
      {parse(generateStory({ ...state }))}
    </div>
  );
};

Story.propTypes = {
  state: PropTypes.object.isRequired,
};
