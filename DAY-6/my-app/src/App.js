
import Home from './Home';
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='/home' Component={Home}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
