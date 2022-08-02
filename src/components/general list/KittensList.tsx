import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import axios from 'axios';

import store, { IKitten } from '../../store/Kittens';
import './KittensList.scss';
import KittenItem from '../item/KittenItem';

const KittensList = observer(() => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [fetching, setFetching] = useState<boolean>(true);

  const scrollHandler = (): void => {
    if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 60) {
      setFetching(true);
    };
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function() {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    fetchKittens();
  }, [fetching]);

  async function fetchKittens() {
    try {
      const responses = await axios.get<IKitten[]>(`https://api.thecatapi.com/v1/images/search?page=${currentPage}&limit=15&order=Asc`);
      store.setKittens([...store.kittens, ...responses.data]);
      setCurrentPage((prevState) => prevState + 1);
    } catch (e) {
      console.log(e);
    } finally {
      setFetching(false);
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
