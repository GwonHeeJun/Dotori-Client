import React, { useState, useEffect } from "react";
import { GlobalStyle, Positioner, ContentWrapper } from "./Style/GlobalStyle";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { SidebarContainer, NotResponsiveContainer } from "./Container";
import { PopupConsumer, PopupProvider } from "./Utils/Context/PopupContext";
import { Popup } from "./Components";
import { PopupInfo } from "./Utils/Models/PopupInfo";


const App: React.FC = () => {
  const [canResponsive, setCanResponsive] = useState(true);
  function _renderPopups() {
    return (
      <PopupConsumer>
        {(state) =>
          (state[0].popupList as PopupInfo[]).map((popup) => (
            <Popup key={popup.id} info={popup} />
          ))
        }
      </PopupConsumer>
    );
  }

  useEffect(() => {
    return () => window.innerWidth < 1520 || window.innerHeight < 800  ? setCanResponsive(false) : setCanResponsive(true)
  }, [])

  setInterval(() => 
    window.innerWidth < 1520 || window.innerHeight < 800  ? setCanResponsive(false) : setCanResponsive(true)
  , 500);

  return (
    canResponsive ? <BrowserRouter>
    <PopupProvider>
      <GlobalStyle />
      <Positioner>
        <SidebarContainer />
        <ContentWrapper>
          <Router />
        </ContentWrapper>
        {_renderPopups()}
      </Positioner>
    </PopupProvider>
  </BrowserRouter> : <NotResponsiveContainer />
  );
};

export default App;
