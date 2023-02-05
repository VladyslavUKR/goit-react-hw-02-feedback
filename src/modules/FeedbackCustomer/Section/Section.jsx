import css from './section.module.css';

const Section = ({ children, tittle, text, totalResultFeedback }) => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.tittle}>{tittle}</h1>
      <h4 className={css.preTittle}>
        {text}
        <span className={css.text}> {totalResultFeedback}</span>
      </h4>
      {children}
    </div>
  );
};

export default Section;
