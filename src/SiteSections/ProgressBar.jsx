import { PropTypes } from 'prop-types';

export const ProgressBar = ({ completed }) => {
  const containerStyles = {
    height: '40px',
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: `rgb(255, 37, 124)`,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    color: 'white',
    fontWeight: 'bold',
  };
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
};
