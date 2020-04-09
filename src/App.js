import React, { Component } from "react";
import styled from "styled-components";

const Test = styled.div`
  background: red;
`;

class App extends Component {
  render() {
    return <Test>test</Test>;
  }
}

export default App;