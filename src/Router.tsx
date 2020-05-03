import React from 'react';
import { Route } from 'react-router-dom';
import { HomeContainer, LaptopContainer } from './Container';

const Router: React.FC = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/laptop" component={LaptopContainer} />
      <Route path="/notice" component={() => <div>공지사항 페이지</div>} />
      <Route path="/notice/write" component={() => <div>공지사항 작성 페이지</div>} />
    </React.Fragment>
  );
};

export default Router
