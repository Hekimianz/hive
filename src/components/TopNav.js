import styles from "./css/TopNav.module.css";
import logo from "../assets/hiveLogo.png";
function TopNav() {
  return (
    <div className={styles.topNavCont}>
      <img className={styles.logo} src={logo} />
    </div>
  );
}

export default TopNav;
