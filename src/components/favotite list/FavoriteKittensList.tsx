import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import {FaHeart} from 'react-icons/fa';

import store, { IKitten } from '../../store/Kittens';
import '../general list/KittensList';

const FavoriteKittensList: FC = observer(() => {
  const handleClick = (item: IKitten): void => {
    store.removeFromFavoriteKittens(item.id);
  };

  return (
    <div className='kittens-list'>
      {store.favoriteKittens.map((item: IKitten) => {
        return (
          <div key={item.id} className='item'>
          <img
            src={item.url} 
            className='item-img' 
            alt=''
          />
          <div className='item-overlay'>
            <div className='icons'>
              <FaHeart
                className='icon-active'
                onClick={() => handleClick(item)}
              />
            </div>
          </div>
        </div>
        )}
      )}
    </div>
  );
});

export default FavoriteKittensList;
