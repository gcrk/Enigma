import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return(
    <Link to='/1'><img src={process.env.PUBLIC_URL + 'logo192.png'} alt="Enter Game"/></Link>
  )
}

export default Home
