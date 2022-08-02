import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Navigation from './components/navigation/Navigation';
import './App.css';

const App: FC = observer(() => {

  return (
    <div>
      <Navigation />
    </div>
  );
});

export default App;
