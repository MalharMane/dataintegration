import React from 'react'
import { Link } from 'react-router-dom';

function Routercomp() {
  return (
    <div>
    
      <Link to='/'>Home</Link> &nbsp;
      <Link to='/aboutus' >Aboutus</Link> &nbsp;
      <Link to='/contactus' >Contactus</Link> &nbsp;
    
    </div>
  )
}

export default Routercomp;