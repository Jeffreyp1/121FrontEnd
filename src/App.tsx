import React from 'react'
import Search from './Search'
import {useNavigate, BrowserRouter, Route, Routes} from 'react-router-dom';
import SearchPage from './SearchPage'
import ResultPage from './ResultPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<SearchPage/>}  />
        <Route path ="/resultPage" element={<ResultPage/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
