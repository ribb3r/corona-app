import React from "react";
import { Container } from "semantic-ui-react";
import ValueBoxGroup from "./ValueBoxGroup";

export default class App extends React.Component {
    render() {
      return (
        <Container style={{ margin: 20 }}>
          <ValueBoxGroup />
        </Container>
      );
    }
}
