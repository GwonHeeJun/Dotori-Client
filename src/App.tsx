import React from 'react';
import { GlobalStyle, Positioner, ContentWrapper } from './Style/GlobalStyle';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = ( ) => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Positioner>
        <div style={{ width: '15rem', height: '100vh', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Sidebar Container
        </div>
        <ContentWrapper>
          <Router />
        </ContentWrapper>
      </Positioner>
    </BrowserRouter>
  )
}

export default App;