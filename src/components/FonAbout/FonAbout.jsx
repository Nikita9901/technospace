import text from "./images/text.svg";
import styles from "./FonAbout.module.css";

const FonAbout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.dark}></div>
        <img src={text} alt="fon" className={styles.text} />
      </div>
    </>
  );
};

export default FonAbout;
