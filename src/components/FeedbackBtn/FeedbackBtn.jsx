import PropTypes from 'prop-types';

export const FeedbackBtn = ({ options, OnLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        key={option}
        name={option}
        onClick={() => OnLeaveFeedback(option)}
      >
        {option}
      </button>
    );
  });
};

FeedbackBtn.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  OnLeaveFeedback: PropTypes.func.isRequired,
};
