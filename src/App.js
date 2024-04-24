import { Routes, Route } from "react-router-dom";
import styles from "./css/App.module.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <div className={styles.appMainCont}>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
