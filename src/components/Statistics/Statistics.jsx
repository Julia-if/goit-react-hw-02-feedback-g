const Statistics = ({ stats, total, positivePercentage }) => {
  return (
    <ul>
      {stats.map(([name, value]) => (
        <li key={name}>
          {name}: {value}
        </li>
      ))}
      <li>total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};
export default Statistics;
