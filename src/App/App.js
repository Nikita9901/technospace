import { Layout } from "../pages";
import { Header } from "../components";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Layout />
    </div>
  );
}

export default App;
