import { Layout } from "../pages";
import fon from "./images/fon.jpg"
import { Bottom, Header, FonAbout } from "../components";
import styles from "./App.module.css";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-xxxxxx'
};

TagManager.constructor(tagManagerArgs)

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <Header />
      </div>
        <div className={styles.fonImage}>
            <img src={fon} alt=""/>
        </div>
        <div className={styles.fon}>
            <FonAbout/>
        </div>
      <Layout className={styles.layout}/>
      <div className={styles.bottom}>
        <Bottom />
      </div>
    </div>
  );
}

export default App;
