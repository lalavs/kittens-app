import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Navigation from './components/navigation/Navigation';
import './App.css';
import KittensList from './components/general list/KittensList';

const App: FC = observer(() => {

  return (
    <div>
      <Navigation />
      <KittensList />
    </div>
  );
});

export default App;
