import styled from '@emotion/styled';

const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StatisticsItem = styled.li`
  font-size: 20px;
`;

const StatisticsLabel = styled.span`
  font-weight: 700;
`;

const css = { StatisticsList, StatisticsItem, StatisticsLabel };

export default css;
