import PropTypes from "prop-types";
import styles from "./HeadText.module.css";

const HeadText = ({ children }) => {
  return (
    <>
      <div className={styles.text}>{children}</div>
    </>
  );
};

HeadText.propTypes = {};

export default HeadText;
