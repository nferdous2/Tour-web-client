import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const Service = ({ service }) => {
  const { _id, name, description, img } = service;
  return (
    <div>
      <Col className="service">
        <Card className="service-style">
          <Card.Img style={{ height: "11rem" }} variant="top" src={img} />
          <Card.Body>
            <Card.Title className="infos">{name}</Card.Title>
            <Card.Text>{description} </Card.Text>
          </Card.Body>
          <div className="btn-div">
              <Link to={`/booking/${_id}`}>
                <button className="btn-service">
                  Book {name.toLowerCase()}
                </button>
              </Link>
            </div>
        </Card>
       
      </Col>
    </div>
  );
};

export default Service;
