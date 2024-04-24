import svg1 from "../assets/read.svg";
import svg2 from "../assets/read3.svg";
import styles from "./css/Home.module.css";
function Home() {
  return (
    <div className={styles.homeMain}>
      <img src={svg1} className={styles.svg} alt="person reading" />
      <h2 className={styles.homeHead}>Welcome to Hive</h2>
      <p className={styles.homeSubHead}>
        Join our vibrant community of book lovers to discover new reads, connect
        with fellow readers, and dive into the world of literature like never
        before.
      </p>
      <h2 className={styles.homeHead}>Get Started Today!</h2>
      <p className={styles.homeGetStartedText}>
        Signing up for Hive is quick, easy, and free!
      </p>
      <img src={svg2} className={styles.svg2} alt="person reading" />
      <button className={styles.button}>Sign Up</button>
      <h2 className={styles.homeHead}>Already a Member?</h2>
      <button className={styles.button}>Sign In</button>
    </div>
  );
}

export default Home;
