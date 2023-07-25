import './App.css';
import React from 'react';
import Forcast from './Components/Forcast';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<><Forcast/></>}/>

      </Routes>
      </BrowserRouter>





    </div>
  
   
  );
}

export default App;
