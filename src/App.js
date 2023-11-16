//import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
