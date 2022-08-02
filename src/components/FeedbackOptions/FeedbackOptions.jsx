import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(key => (
        <button
          type="button"
          key={key}
          onClick={() => onLeaveFeedback(key)}
          className={s.button}
        >
          {key}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
