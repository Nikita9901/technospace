import styles from "./Card.module.css";

const Card = ({ textImage, image, description, onClick, buttonText }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={image} alt="" className={styles.image} />
        <div className={styles.textImage}>
          <img src={textImage} alt="" />
        </div>
        <div className={styles.description}>
          <img src={description} alt="" />
        </div>
        {buttonText ? (
          <div className={styles.button} onClick={onClick}>
            {buttonText}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Card;
