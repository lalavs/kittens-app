import React, { FC } from 'react';

import { IKitten } from '../../store/Kittens';
import './KittenItem.scss';

interface KittenItemProps {
  item: IKitten;
}

const KittenItem: FC<KittenItemProps> = ({item}) => {
  return (
    <div key={item.id} className='item'>
      <img
        src={item.url}
        className='item-img'
      />
    </div>
  );
};

export default KittenItem;
