import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Task } from "../components";

const tasks = [
  {
    title: "Recruit team of stronauts",
    month: "Sept",
    priority: "High",
    image: require("../assets/images/user1.png")
  },
  {
    title: "Purchase supplies and spacecrafts",
    month: "Sept",
    priority: "Low",
    image: require("../assets/images/user1.png")
  },
  {
    title: "Design flag to place on moon",
    month: "Sept",
    priority: "Med",
    image: require("../assets/images/user1.png")
  }
];

export default class TaskList extends Component {
  render() {
    return (
      <Col xs={12}>
        <Row>
          <Col xs={12} className="form-group">
            <Button variant="outline-success">Add Task</Button>
          </Col>
          <Col xs={12} className="form-group">
            {tasks.map((task, key) => (
              <Task key={key} {...task} />
            ))}
          </Col>
        </Row>
      </Col>
    );
  }
}
