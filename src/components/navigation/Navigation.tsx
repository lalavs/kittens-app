import React, { FC } from 'react';

import './Navigation.scss';

const Navigation: FC = () => {

  return (
    <header className='header'>
      <div className='container'>
        <nav className='nav'>
          <button 
            className={'nav-btn'}     
          >
            Все котики
          </button>
          <button
            className={'nav-btn'}
          >
            Любимые котики
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
