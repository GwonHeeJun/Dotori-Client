import React from "react";
import { GlobalStyle, Positioner, ContentWrapper } from "./Style/GlobalStyle";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { SidebarContainer } from "./Container";
import { PopupConsumer, PopupProvider } from "./Utils/Context/PopupContext";
import { Popup } from "./Components";
import { PopupInfo } from "./Utils/Models/PopupInfo";


const App: React.FC = () => {
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

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
