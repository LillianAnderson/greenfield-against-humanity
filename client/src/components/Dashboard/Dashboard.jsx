import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  return (
    <div className='Dashboard'>
      <div>
        <div className='dashboardContent'> 
          <div className='Title'>Welcome, you filthy cur</div>
          <div>
            <Link to='lobby'>
              Play a game
            </Link>
          </div>
          <div>
            <Link to='deckbuilder'>
              Build a deck
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;