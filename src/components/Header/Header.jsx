import PropTypes from "prop-types";
import logo from "./images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contacts}>
        Скрыганова 2 <br /> +375 (29) 148-05-50
      </div>
      <img src={logo} alt="" className={styles.podl} />
      <div className={styles.work_time}>
        10:00-20:00
        <br />
        Ежедневно
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
