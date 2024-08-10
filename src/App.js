import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewallTodos from './components/ViewAll';

function App() {
  return (

<div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Add/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path='/viewall'element={<ViewallTodos/>}/>
      </Routes>
      </BrowserRouter>
    </div>




  );
}

export default App;
