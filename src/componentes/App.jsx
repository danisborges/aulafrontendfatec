import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Home from "./pages/home/home"; 
import Login from "./pages/login/login";

function App() {
  return (
    <div className='centraliza'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
