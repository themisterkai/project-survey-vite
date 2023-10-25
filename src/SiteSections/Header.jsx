import { PropTypes } from 'prop-types';

export const Header = ({ text }) => {
  return <div className="header">{text}</div>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
