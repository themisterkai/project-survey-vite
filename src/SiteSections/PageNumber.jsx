import { PropTypes } from 'prop-types';

export const PageNumber = ({ currentPage, total }) => {
  return (
    <div className="page-number">
      Page {currentPage} of {total}
    </div>
  );
};

PageNumber.propTypes = {
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
