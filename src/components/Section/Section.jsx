import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <p>{title}</p>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
