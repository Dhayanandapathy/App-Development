
import Home from './Home';
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Letter from './Letters'
import Leader from './Leader';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='/home' Component={Home}></Route>
        <Route path='/letters' Component={Letter}></Route>
        <Route path='/leaderboard'Component={Leader}></Route>

      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
