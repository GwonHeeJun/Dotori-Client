import React from 'react';
import { GlobalStyle, Positioner, ContentWrapper } from './Style/GlobalStyle';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { SidebarContainer } from './Container';

const App: React.FC = ( ) => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Positioner>
        <SidebarContainer />
        <ContentWrapper>
          <Router />
        </ContentWrapper>
      </Positioner>
    </BrowserRouter>
  )
}

export default App;