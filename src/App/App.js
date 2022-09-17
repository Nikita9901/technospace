import { Layout } from "../pages";
import { Bottom, Header } from "../components";
import io from "socket.io-client";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <Header />
      </div>

      <Layout />
      <div className={styles.bottom}>
        <Bottom />
      </div>
    </div>
  );
}

export default App;
