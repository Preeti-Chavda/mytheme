import { Link } from "react-router-dom";
function Menu(){
    return(
        <>
         <div class="navbar">
          <div class="icon">
            <h2 class="logo">ReacT</h2>
          </div>

          <div class="menu">
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>ABOUT</Link></li>
              <li><Link to={'/service'}>SERVICE</Link></li>
              <li><Link to={'/design'}>DESIGN</Link></li>
              <li><Link to={'/contact'}>CONTACT</Link></li>
            </ul>
          </div>

          <div class="search">
            <button class="btn">Sign Out</button>
          </div>
        </div>
        </>
    )
}export default Menu;