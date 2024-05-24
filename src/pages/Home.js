import React from 'react'
import useravatar from '../data/avatar3.png'
import {  useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();


  return (
    <div className='home-screen'>
    <header>
      <h3>System Name</h3>
      <a onClick={() => navigate('/login')} >Logout</a>
    </header>
    <div className='page-content'>
      
        <div className='user-card'>
          <img src={useravatar} alt='user-avatar' />
          <h3>dddd</h3>
          <div className='user-meta'>
            <p>
              <span>Username:</span>
              <span>jjj</span>
            </p>
            <p>
              <span>Email:</span>
              <span>hhhh</span>
            </p>
            <p>
              <span>Gender:</span>
              <span>pppp</span>
            </p>
          </div>
        </div>
      
    </div>
  </div>
)
}

export default Home