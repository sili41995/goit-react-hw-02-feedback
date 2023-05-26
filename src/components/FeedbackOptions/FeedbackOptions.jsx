import PropTypes from 'prop-types';
import css from './FeedbackOptions.styled';

const { FeedbackOptionsList, FeedbackOptionsItem, FeedbackOptionBtn } = css;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.map((feedback) => (
        <FeedbackOptionsItem key={feedback}>
          <FeedbackOptionBtn
            type='button'
            onClick={() => {
              onLeaveFeedback(feedback);
            }}
          >
            {feedback}
          </FeedbackOptionBtn>
        </FeedbackOptionsItem>
      ))}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
