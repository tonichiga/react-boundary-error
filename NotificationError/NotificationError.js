import s from "./notification-error.module.scss";

const NotificationError = () => {
  return (
    <div className={s.wrapper}>
      Произошла непредвиденная ошибка!
      <span className={s.progress}></span>
    </div>
  );
};
export default NotificationError;
