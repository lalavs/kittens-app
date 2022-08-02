import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import axios from 'axios';

import store, { IKitten } from '../../store/Kittens';
import './KittensList.scss';
import KittenItem from '../item/KittenItem';

const KittensList = observer(() => {

  useEffect(() => {
    fetchKittens();
  }, []);

  async function fetchKittens() {
    try {
      const response = await axios.get<IKitten[]>('https://api.thecatapi.com/v1/images/search?page=1&limit=15&order=Asc');
      store.setKittens(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='kittens-list'>
      {store.kittens.map((kitten: {id: string; url: string}) => (
        <div key={kitten.id}>
          <KittenItem 
            item={kitten}
          />
        </div>
      ))}
    </div>
  );
});

export default KittensList;
