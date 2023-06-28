import PropTypes from 'prop-types';
import {
  PositiveFeedback,
  StatsList,
  StatsListItem,
  Total,
} from './Statistics.styled';

export const Statistics = ({ total, positivePercentage, data }) => {
  return (
    <>
      <StatsList>
        {Object.entries(data).map(([key, value]) => {
          return (
            <StatsListItem key={crypto.randomUUID()}>
              {key}: {value}
            </StatsListItem>
          );
        })}
      </StatsList>
      <Total>Total: {total}</Total>
      <PositiveFeedback>
        Positive Feedbacks: {positivePercentage}%
      </PositiveFeedback>
    </>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};
