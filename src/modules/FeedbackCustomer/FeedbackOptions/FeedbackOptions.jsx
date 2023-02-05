import css from './feedback-options.module.css';

const FeedbackOptions = ({ addVote }) => {
  return (
    <div className={css.btn}>
      <button onClick={() => addVote('good')} className={css.btnVote}>
        Good
      </button>
      <button onClick={() => addVote('neutral')} className={css.btnVote}>
        Neutral
      </button>
      <button onClick={() => addVote('bad')} className={css.btnVote}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
