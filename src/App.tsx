import React from 'react';

import GlobalStyle from './styles/global';
import SigIn from './pages/SigIn/index';
// import SigUp from './pages/SigUp/index';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SigIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
