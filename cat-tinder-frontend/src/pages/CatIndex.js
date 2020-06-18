import React, { useState } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroup, Row, Col
  } from 'reactstrap';
import cats from '../cats'
import CatPic from '../images/cattinder1.png'

const CatIndex = (props) => {
  const [allCats, setAllCats] = useState(cats)
    return(
        <>
        <Row id="mainPageCards">
        { allCats.map((cat, index) => {
          return(
          <>
            <Col xs="6" sm="4" md="3">
            <Card>
                <CardImg top width="100%" src= {CatPic} alt="This is the alt text" />
                <CardBody >
                  <ListGroup key={ index }>
                    <CardTitle >{ cat.name }</CardTitle>
                    <CardSubtitle>{ cat.age }</CardSubtitle>
                    <CardText>{ cat.enjoys }</CardText>
                    </ListGroup>
                </CardBody>
            </Card>
            </Col>
            </>
          )})}
          </Row>
        </>
)}

export default CatIndex
