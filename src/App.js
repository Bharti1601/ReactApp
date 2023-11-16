//import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
