import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ButtonWrapper>
      {options.map(btn => {
        return (
          <Button
            key={btn}
            type="button"
            onClick={() => {
              onLeaveFeedback(btn);
            }}
          >
            {btn}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
