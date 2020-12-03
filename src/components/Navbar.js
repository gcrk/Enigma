import React, { Component } from 'react';
import { Link } from 'react-router-dom'




class Navbar extends Component {
  constructor() {
    super();
    this.state = { links: ''}
  };

  render() {
    return(
      <div className='navbar'>
        <h1>Enigma</h1>

          <Link to="/" >Home</Link>
          <Link to="/rules" >Rules</Link>
          <Link to="/about" >About</Link>

      </div>
    )
  }
}

export default Navbar
