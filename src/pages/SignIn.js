import styles from "./css/SignIn.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import svg from "../assets/read2.svg";

function SignIn({ userCredential, setUserCredential }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      setUserCredential(
        await signInWithEmailAndPassword(auth, email, password)
      );
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.signInMain}>
      <img className={styles.signUpSvg} src={svg} alt="svg" />{" "}
      <input
        className={styles.signUpInput}
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className={styles.signUpInput}
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className={styles.signUpButtons}>
        <button
          className={styles.button}
          onClick={() => {
            signIn();
            setEmail("");
            setPassword("");
          }}
        >
          Sign in
        </button>
      </div>
      <span className={styles.alreadyMemberSpan}>
        Not a member? Sign up{" "}
        <Link to="/signup" className={styles.alreadyMemberLink}>
          here!
        </Link>
      </span>
    </div>
  );
}

export default SignIn;
