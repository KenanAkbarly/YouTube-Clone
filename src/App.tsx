import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import Watch from './pages/watch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/watch/:id' element={<Watch/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
