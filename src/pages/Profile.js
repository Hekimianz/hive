import styles from "./css/Profile.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Profile({ userCredential, setUserCredential }) {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserCredential(user);
    });

    return () => unsubscribe;
  });

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserCredential(null);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <div className={styles.profileMain}>
      <button className={styles.logout} onClick={handleLogout}>
        log out
      </button>
    </div>
  );
}

export default Profile;
