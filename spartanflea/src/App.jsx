import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage'
import RegistrationPage from './pages/RegistrationPage'; 
import LoginPage from './pages/LoginPage'; 

function App(){
  return(
    <Routes>
      <Route index element={<IndexPage/>}/>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path ="/login" element={<LoginPage />}/>
        
    </Routes>
  );

}
export default App