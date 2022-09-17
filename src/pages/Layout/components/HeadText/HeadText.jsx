import styles from "./HeadText.module.css";

const HeadText = ({ children }) => {
  return (
    <>
      <div className={styles.text}>{children}</div>
    </>
  );
};
export default HeadText;
