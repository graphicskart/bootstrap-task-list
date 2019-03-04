import React, { Component } from "react";
import "./App.css";
import { Container, Col } from "react-bootstrap";
import { TaskList } from "./components";

class App extends Component {
  render() {
    return (
      <Container>
        <Col xs={12} sm={8} className="outer-box">
          <TaskList />
        </Col>
      </Container>
    );
  }
}

export default App;
