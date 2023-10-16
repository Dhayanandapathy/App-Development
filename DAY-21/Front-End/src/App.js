
import Home from './Home';
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Letter from './Letters'
import Leader from './Leader';
import Quest from './Quest';
import Shop from './Shop';
import Level1 from './Levels/Level1';
import AboutUs from './AboutUs';
import TermsPage from './TermsPage';
import PolicyPage from './PolicyPage';
import CareersPage from './CareersPage';
import Profile from './Profile';
import Lp1 from './Levels/Lp1';
import Level2 from './Levels/Level2';
import Lev12 from './Levels/Lev12';
import Mainpage from './Mainpage';
import Signup from './Signup';
import Levels from './Levels/Levels';
import Crp from './Crp';
import FeedbackForm from './Feedback';
import Admin from './Admin';
import OfflineC from './OfflineC';
import VideoClass from './VideoClass';
import Lettersadmin from './Lettersadmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Mainpage} />
          <Route path='/login' Component={Login}></Route>
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
          <Route path='/profile'Component={Profile}></Route>
          <Route path='/lp1'Component={Lp1}></Route>
          <Route path='/levl12'Component={Lev12}></Route>
          <Route path='nl' Component={Level2}></Route>
          <Route path='/signup' Component={Signup}></Route>
          <Route path='/Levelss' Component={Levels}></Route>
          <Route path='/crp' Component={Crp}></Route>
          <Route path='Admin' Component={Admin}></Route>
          <Route path='/feedback' Component={FeedbackForm}></Route>
          <Route path='/offlinecourse' Component={OfflineC}></Route>
          <Route path='/VideoClass' Component={VideoClass}></Route>
          <Route path='/lettersadmin' Component={Lettersadmin}></Route>
          
     {/*     <Route path='/admin/stu/add' Component={EmpCreate}></Route>
          <Route path='stu/det' Component={EmpDetail}></Route>
  <Route path='stu/edit' Component={EmpEdit}></Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
