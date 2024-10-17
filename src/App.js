import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './component/Registration'; 
import ViewData from './component/ViewData';
import Update from './component/Update';

function App() {
  
  return ( 
    <BrowserRouter> 
      <Routes> 
          <Route  path="/" element={<Registration />} /> 
          <Route path="/view" element={<ViewData />} /> 
          <Route path="/edit/:id" element={<Update />} /> 
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
