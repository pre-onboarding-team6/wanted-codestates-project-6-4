import React from 'react';

import { Global } from '@emotion/react';
import { reset } from './styles/reset';

function App() {
  return (
    <>
      <Global styles={reset} />
      <div className="App">App</div>
    </>
  );
}

export default App;
