import React, { useState, useEffect } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroup, Row, Col
  } from 'reactstrap';


const CatList = () => {
    //Create an empty array to hold all the cats
  const [allCats, setAllCats] = useState([])

    //useEffect hook lets us GET all cats from the database when the component loads
    //the empty array after the comma means that it will get triggered automatically only once
  useEffect(() =>{ grabCats()},[])

  async function grabCats () {
    try {
        //GET data from the backend
      let response = await fetch("http://localhost:3000/cats")

      let data = await response.json();
        //all good?
      if(response.status === 200) {
        //check the console to make sure we have all the cats
        console.log("data", data)
        //populate the newCats state array with data
        setAllCats(data)
      }
    } catch (err) {
        console.log(err)
    }
  }
    return(

          <>
          <Row id="mainPageCards">
          { allCats.map((cat, index) => {
            return(
            <>
              <Col xs="6" sm="4" md="3">
              <Card>
                  <CardImg top width="100%" src='#' alt="This is the alt text" />
                  <CardBody >
                    <ListGroup key={ index }>
                      <img src="../images/cattinder1.png"/>
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
    )
  }

export default CatList
