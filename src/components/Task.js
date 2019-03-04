import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Tag } from "../components";

export default class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  toggleState = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    const { title = "", month = "", priority = "", image = "" } = this.props;
    return (
      <Col xs={12} className="task">
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12} sm={1}>
                <Row>
                  <i
                    className={`${
                      this.state.active ? "fas" : "far"
                    } fa-check-circle`}
                    onClick={this.toggleState}
                  />
                </Row>
              </Col>
              <Col xs={12} sm={7} className="text">
                {title}
              </Col>
              <Col xs={12} sm={1} className="text">
                {month}
              </Col>
              <Col xs={12} sm={2}>
                <Tag title={priority} />
              </Col>
              <Col xs={12} sm={1} className="no-padding">
                <img className="image float-right" src={image} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}
