const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>{good}</li>
      <li>{neutral}</li>
      <li>{bad}</li>
      <li>{total}</li>
      <li>{positivePercentage}</li>
    </ul>
  );
};

export default Statistics;
