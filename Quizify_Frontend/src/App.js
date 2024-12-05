import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Login, Quiz, Result } from "./Pages/index";




function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/auth/login" element={ <Login /> } />
        <Route path="/quiz" element={ <Quiz/> } />
        <Route path="/result" element={ <Result /> } />
      </Routes>
    </div>
  );
}

export default App;
