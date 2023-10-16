
import Home from './Home';
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Letter from './Letters'
import Leader from './Leader';
import Quest from './Quest';
import Shop from './Shop';
import Level1 from './Level1';
import AboutUs from './AboutUs';
import TermsPage from './TermsPage';
import PolicyPage from './PolicyPage';
import CareersPage from './CareersPage';
import Admin from './Admin';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='/admin' Component={Admin} />
          <Route path='/.levl1' Component={Level1}></Route>
          <Route path='/home' Component={Home}></Route>
          <Route path='/letters' Component={Letter}></Route>
          <Route path='/leaderboard' Component={Leader}></Route>
          <Route path='/quests' Component={Quest}></Route>
          <Route path='/shop' Component={Shop}></Route>
          <Route path='/about' Component={AboutUs}></Route>
          <Route path='/terms' Component={TermsPage}></Route>
          <Route path='/policy' Component={PolicyPage}></Route>
          <Route path='/carrer' Component={CareersPage}></Route>
          
          


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
