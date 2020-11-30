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

          <Link to="/" >Play</Link>
          <Link>Rules</Link>
          <Link>About</Link>

      </div>
    )
  }
}

export default Navbar
