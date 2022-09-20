import fon from "./images/fon.jpg"
import text from "./images/text.png"
import styles from './FonAbout.module.css';

const FonAbout = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.dark}></div>
                <img src={text} alt="fon" className={styles.text}/>

            </div>
        </>
    )
}

export default FonAbout;
