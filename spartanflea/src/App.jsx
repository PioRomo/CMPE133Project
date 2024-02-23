import './App.css';
import {Route, Routes} from "react-router-dom"; 
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route index element ={<HomePage />} />
        <Route path ="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
