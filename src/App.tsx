import { Form } from "./components/Form";
import styles from "./styles/style.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>Learn to code by watching others</h2>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className={styles.formContainer}>
        <button className={styles.tryButton}>
          <strong> Try it free 7 days</strong> then $20/mo. thereafter
        </button>
        <Form />
      </div>
    </div>
  );
}

export default App;
