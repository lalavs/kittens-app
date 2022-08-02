import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import {FiHeart} from 'react-icons/fi';
import {FaHeart} from 'react-icons/fa';

import store, { IKitten } from '../../store/Kittens';
import './KittenItem.scss';

interface KittenItemProps {
  item: IKitten;
}

const KittenItem: FC<KittenItemProps> = observer(({item}) => {
  const isItemInFavorites: boolean = store.favoriteKittens.some((i: IKitten) => i.id === item.id);

  const handleClick = (): void => {
    if (isItemInFavorites) {
      store.removeFromFavoriteKittens(item.id)
    } else {
      store.addToFavoriteKittens(item);
    }
  };

  return (
    <div key={item.id} className='item'>
      <img
        src={item.url}
        className='item-img'
      />
      <div className='item-overlay'>
        <div
          className='icons'
          onClick={handleClick}
        >
        {isItemInFavorites ?
          <FaHeart className='icon-active' />
          :
          <>
            <FiHeart className='item-icon'/>
            <FaHeart className='item-icon item-icon__hover'/>
          </>
          }
        </div>
      </div>
    </div>
  );
});

export default KittenItem;
