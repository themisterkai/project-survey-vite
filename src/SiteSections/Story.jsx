import { PropTypes } from 'prop-types';
import parse from 'html-react-parser';

import { generateStory, getTitle } from '../constants';
import { Header } from './Header';
import { useState, useEffect } from 'react';

export const Story = ({ state }) => {
  const scrollToTop = useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [page, setPage] = useState(0);
  const storyArray = generateStory({ ...state });
  const increase = () => {
    setPage(page + 1);
    scrollToTop();
  };

  const decrease = () => setPage(page - 1);
  return (
    <div>
      <div className="story"></div>
      <Header text={getTitle({ ...state })} />
      <div className="page-number">
        page {page + 1} of {storyArray.length}
      </div>
      {parse(storyArray[page])}
      <div className="page-number">
        page {page + 1} of {storyArray.length}
      </div>
      <div className="button-story">
        {page === 0 ? (
          <></>
        ) : (
          <button onClick={() => decrease()}>Previous</button>
        )}
        {page === storyArray.length - 1 ? (
          <></>
        ) : (
          <button onClick={() => increase()}>Next</button>
        )}
      </div>
    </div>
  );
};

Story.propTypes = {
  state: PropTypes.object.isRequired,
};
