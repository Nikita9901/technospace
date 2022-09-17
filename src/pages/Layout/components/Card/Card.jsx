import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ textImage, image, description, onClick, buttonText }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={image} alt="" className={styles.image} />
        <div className={styles.textImage}> {textImage}</div>
        <div className={styles.description}>{description}</div>
        {buttonText ? (
          <div className={styles.button} onClick={onClick}>
            {buttonText}
          </div>
        ) : null}
      </div>
    </>
  );
};

Card.propTypes = {};

export default Card;
