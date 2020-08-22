import React from 'react';
import Item from './itemComponent'
function Head()
{
    return(

        <div>
            <nav className="navbar fixed-top navbar-light bg-dark">
  <a className="navbar-brand "><img src={`${process.env.PUBLIC_URL}/images/nav.png`}className="btn menu" style={{width:"1.5rem"},{height:"1.5rem"}}/>
</a>

<ul className="navbar-nav">
      <li className="nav-item col-1 col-lg-1">
        <a className="nav-link" href="/"><img src={`${process.env.PUBLIC_URL}/images/logo.jpg`}style={{width:"2.7rem"},{height:"2.7rem"}}></img>
</a>
      </li>
         
      </ul>
<span className="nav-item col-7 col-lg-2" style={{fontSize:"1rem"}}>Sri Balaji Stores</span>
<form className="nav-item form-inline col-10 col-md-11 col-lg-8">
    <input type="text" className="form-control" placeholder="Search For Products" style={{width:"100%"}}/>
    <img src={`${process.env.PUBLIC_URL}/images/search.png`}className="btn menu" style={{width:"1rem"},{height:"1.5rem"}} id="searchicon"/>

    
  </form>
<img  src={`${process.env.PUBLIC_URL}/images/cart.png`} className="btn menu cart nav-item" style={{width:"2rem"},{height:"2rem"}}/>

 

</nav>
<Item/>
<Item/>
<Item/>
</div>
    )
}
export default Head