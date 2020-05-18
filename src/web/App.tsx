import * as React from "react";
import "./styles.css";
import styled from "styled-components";
import { Switch, Route } from "react-router";
// import { PersonalHome } from "./labpersonal-ittyni/src";
// import { Garde } from "../ittyni-garde/src/garde";

import { Garde } from "../ittyni-garde/src/garde";

export default function App() {
  // const date = new Date().toISOString();
  return (
    <div className="App">
      <Container>
        <Switch>

          {/* <Route path="/personal" component={PersonalHome} /> */}

        </Switch>
      </Container>
    </div>
  );
} 
const Container = styled.div`
  margin-left: 300px;
  @media (max-width: 700px) {
    margin-left: 0px;
  }

  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
