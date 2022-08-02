import React, { useState, FC } from 'react';
import { observer } from 'mobx-react-lite';

import KittensList from '../general list/KittensList';
import FavoriteKittensList from '../favotite list/FavoriteKittensList';
import './Navigation.scss';

const Navigation: FC = observer(() => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const handleTabAll = ():void => {
    setActiveTab('all');
  };
  const handleTabFavorites = ():void => {
    setActiveTab('favorites');
  };

  return (
    <header className='header'>
      <div className='container'>
        <nav className='nav'>
        <button 
            className={activeTab === 'all' ? 'nav-btn nav-btn__active' : 'nav-btn'}
            onClick={handleTabAll}        
          >
            Все котики
          </button>
          <button
            className={activeTab === 'favorites' ? 'nav-btn nav-btn__active' : 'nav-btn'}
            onClick={handleTabFavorites}
          >
            Любимые котики
          </button>
        </nav>

        {activeTab === 'all' ? <KittensList /> : <FavoriteKittensList />}

      </div>
    </header>
  );
});

export default Navigation;
