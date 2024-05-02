import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import styles from "./css/App.module.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
function App() {
  const [userCredential, setUserCredential] = useState(null);

  return (
    <div className={styles.appMainCont}>
      <TopNav userCredential={userCredential} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              userCredential={userCredential}
              setUserCredential={setUserCredential}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              userCredential={userCredential}
              setUserCredential={setUserCredential}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <SignIn
              userCredential={userCredential}
              setUserCredential={setUserCredential}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              userCredential={userCredential}
              setUserCredential={setUserCredential}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
