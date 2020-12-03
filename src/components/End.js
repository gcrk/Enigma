import React from 'react';
import { Link } from 'react-router-dom';
import paper from './paper.png'

const End = () => {
  return(

    <div className='home-letter' style={{backgroundImage: `url(${paper})`, backgroundSize: 'cover' }}>
      <div className='home-letter-text' >
        <p>
          To be continued.</p>
        <p>
          New enigmas coming soon.</p>
        <p>
          Please Come Back Later</p>

        <Link to='/1' className='home-letter-play'>REPLAY</Link>

      </div>

    </div>

  )
}

export default End
