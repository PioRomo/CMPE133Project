import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage'
import RegistrationPage from './pages/RegistrationPage'; 
function App(){
  return(
    <Routes>
      <Route index element={<IndexPage/>}/>
        <Route path="/register" element={<RegistrationPage />} />
        
    </Routes>
  );

}
export default App