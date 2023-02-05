import css from './nitofication.module.css';

const Notification = ({ tittle }) => {
  return <h4 className={css.tittle_message}>{tittle} 🥺</h4>;
};

export default Notification;
