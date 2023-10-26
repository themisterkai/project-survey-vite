import { PropTypes } from 'prop-types';
import parse from 'html-react-parser';

import { generateStory, getTitle } from '../constants';
import { Header } from './Header';
import { useState } from 'react';
import { PageNumber } from './PageNumber';

export const Story = ({ state }) => {
  const [page, setPage] = useState(0);
  const storyArray = generateStory({ ...state });
  const increase = () => {
    setPage(page + 1);
    if (window.screen.width < 667) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };
  const decrease = () => {
    setPage(page - 1);
    if (window.screen.width < 667) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="story"></div>
      <Header text={getTitle({ ...state })} />
      <PageNumber currentPage={page + 1} total={storyArray.length} />
      {parse(storyArray[page])}
      {window.screen.width < 667 ? (
        <PageNumber currentPage={page + 1} total={storyArray.length} />
      ) : (
        <></>
      )}
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
