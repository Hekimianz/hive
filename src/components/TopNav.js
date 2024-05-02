import styles from "./css/TopNav.module.css";
import logo from "../assets/hiveLogo.png";
import { useNavigate } from "react-router-dom";
function TopNav({ userCredential }) {
  const navigate = useNavigate();

  return (
    <div className={styles.topNavCont}>
      <img
        className={styles.logo}
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
      />
      {userCredential ? (
        <span
          onClick={() => navigate("/profile")}
          className={"material-symbols-outlined " + styles.accountIcon}
        >
          account_circle
        </span>
      ) : null}
    </div>
  );
}

export default TopNav;
