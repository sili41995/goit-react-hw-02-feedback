import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.styled';

const { StatisticsList, StatisticsItem, StatisticsLabel } = css;

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        Good: <StatisticsLabel>{good}</StatisticsLabel>
      </StatisticsItem>
      <StatisticsItem>
        Neutral: <StatisticsLabel>{neutral}</StatisticsLabel>
      </StatisticsItem>
      <StatisticsItem>
        Bad: <StatisticsLabel>{bad}</StatisticsLabel>
      </StatisticsItem>
      <StatisticsItem>
        Total: <StatisticsLabel>{total}</StatisticsLabel>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback:{' '}
        <StatisticsLabel>{positivePercentage}%</StatisticsLabel>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
