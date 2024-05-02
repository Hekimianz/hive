import styles from "./css/SignUp.module.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db, storage, auth } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import svg from "../assets/read2.svg";
function SignUp({ userCredential, setUserCredential }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      currentStep === 0 &&
      firstName.trim() &&
      lastName.trim() &&
      sex != null
    ) {
      setIsButtonDisabled(false);
    } else if (currentStep === 1 && userName.trim()) {
      setIsButtonDisabled(false);
    } else if (currentStep === 2 && email.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [firstName, lastName, sex, email, password, userName, currentStep]);

  const signUp = async () => {
    try {
      const profile = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userId = profile.user.uid;

      await updateProfile(auth.currentUser, {
        displayName: userName,
      });
      setUserCredential(profile);
      navigate("/");
      await addToCollection(userId);
    } catch (err) {
      console.error(err);
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => ++prev);
  };
  let inputTitle = "";
  if (currentStep === 0) {
    inputTitle = "Enter Personal Info";
  } else if (currentStep === 1) {
    inputTitle = "Create A Display Name";
  } else if (currentStep === 2) {
    inputTitle = "Enter Email And Password";
  }

  const addToCollection = async (userId) => {
    try {
      const collectionRef = collection(db, "usersCollection");
      const data = {
        firstName: firstName,
        lastName: lastName,
        fullName: `${firstName} ${lastName}`,
        profilePic: `url`,
        sex: sex,
        uid: userId,
      };
      await addDoc(collectionRef, data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={styles.signUpMainCont}>
      <img className={styles.signUpSvg} src={svg} alt="svg" />{" "}
      <h2 className={styles.inputTitle}>{inputTitle}</h2>
      {currentStep === 0 ? (
        <input
          className={styles.signUpInput}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      ) : null}
      {currentStep === 0 ? (
        <input
          className={styles.signUpInput}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      ) : null}
      {currentStep === 0 ? (
        <div className={styles.sexChoices}>
          {" "}
          <input
            type="radio"
            id="male"
            name="sex"
            value="male"
            onChange={(e) => setSex(0)}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="sex"
            value="female"
            onChange={(e) => setSex(1)}
          />
          <label htmlFor="female">Female</label>
        </div>
      ) : null}
      {currentStep === 1 ? (
        <input
          className={styles.signUpInput}
          placeholder="Display Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      ) : null}
      {currentStep === 2 ? (
        <input
          className={styles.signUpInput}
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      ) : null}
      {currentStep === 2 ? (
        <input
          className={styles.signUpInput}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      ) : null}
      <div className={styles.signUpButtons}>
        <button
          onClick={() => {
            if (currentStep !== 2) {
              nextStep();
            } else {
              signUp();
            }
          }}
          className={styles.button}
          disabled={isButtonDisabled}
        >
          Next
        </button>
      </div>
      <span className={styles.alreadyMemberSpan}>
        Already a member? Sign in{" "}
        <Link to="/signin" className={styles.alreadyMemberLink}>
          here!
        </Link>
      </span>
    </div>
  );
}

export default SignUp;
