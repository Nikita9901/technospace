import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ text, image, onClickButton }) => {
  return (
    <>
      <div className={styles.wrapper} onClick={onClickButton}>
        <img src={image} alt="" className={styles.image} />
        {text}
      </div>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  image: PropTypes.any,
  onClickButton: PropTypes.func,
};

export default Button;
