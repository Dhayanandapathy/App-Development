import react from 'react'
import './Mainpage.css';
import { Link } from 'react-router-dom';

function Mainpage() {
  

  return ( <div className="frb">
  {/*  <StudtListing/>*/}
  <div className="top-nav-bar">
 <div className="left-buttons">

   <button className="nav-button1"><Link  style={{textDecoration:"none",color:"inherit"}} to ={'/'}>HOME</Link></button>
   <button className="nav-button2"><Link  style={{textDecoration:"none",color:"inherit"}} to ={'/about'}>ABOUT</Link></button>
   <button className="nav-button3"><Link  style={{textDecoration:"none",color:"inherit"}} to ={'/'}>CONTACT US</Link></button>
 </div>
</div>
<div className="nipobom">
<img  className='nipob'src='https://media.tenor.com/RMcvgyGp1FkAAAAC/duolingo-language-app.gif'></img>
<div className="mspas">    
<p className="wc"> WELCOME TO NIPO </p>
<div>
 <p className="waste"> The Free,Fun and Effective way to learn a language!</p>
</div>
<button className="sibu"><Link  style={{textDecoration:"none",color:"inherit"}} to ={'/signup'}>GET STARTED WITH NIPO</Link></button>
<div>
<button className="crbu"><Link  style={{textDecoration:"none",color:"inherit"}} to ={'/login'}>ALREADY A NIPO USER?</Link></button>
</div>


</div>

</div>

   </div>
    
  )

}
export default Mainpage;