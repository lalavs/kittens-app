import React, { useEffect, FC } from 'react';
import { observer } from 'mobx-react-lite';

import Navigation from './components/navigation/Navigation';
import store from './store/Kittens';
import './App.css';

const App: FC = observer(() => {
  useEffect(() => {
    const favLocal = JSON.parse(localStorage.getItem('favorites') || '');

    if (favLocal !== null) {
      store.setFavoriteKittens(favLocal);
    }
  }, []);

  return (
    <div>
      <Navigation />
    </div>
  );
});

export default App;
