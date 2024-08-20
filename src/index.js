import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './Componants/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
</Routes>

</BrowserRouter>



</>
);



