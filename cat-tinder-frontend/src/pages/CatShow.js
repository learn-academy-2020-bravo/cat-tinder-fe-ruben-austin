import React, { useState, useEffect } from 'react'
import {
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import '../App.css'

const CatShow = (props) => {
  const [allCats, setAllCats] = useState([])


    //useEffect hook lets us GET all cats from the database when the component loads
    //the empty array after the comma means that it will get triggered automatically only once
  useEffect(() =>{ grabCats()},[])

  async function grabCats () {
    try {
        //GET data from the backend
      let response = await fetch(`http://localhost:3000/cats/${props.match.params.id}`)

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

          <Col xs="6" sm="4" md="3">
          <Card id="cardstyle" onClick= { () => {window.location.replace(`/show/${cat.id}`)}} >

              <CardImg top width="100%" src={cat.images} alt="This is the alt text" />
              <CardBody >
                  <ListGroup key={ index }>
                  <CardTitle id="namestyle">{ cat.name }</CardTitle>
                  <CardSubtitle>{ cat.age } Years Old</CardSubtitle>
                  <CardText>Enjoys: { cat.enjoys }</CardText>
                  </ListGroup>
              </CardBody>
          </Card>
          </Col>
          
        )})}
        </Row>
      </>
    )}

export default CatShow
