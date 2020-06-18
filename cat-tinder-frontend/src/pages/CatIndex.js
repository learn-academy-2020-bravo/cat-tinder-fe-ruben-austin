import React, { useState } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import cats from '../cats'

const CatIndex = (props) => {
  const [allCats, setAllCats] = useState(cats)
    return(
        <>
        { allCats.map((cat, index) => {
          return(
            <>
            <Card>
                <CardImg top width="100%" src="#" alt="Card image cap" />
                <CardBody key={ index }>
                    <CardTitle>{ cat.name }</CardTitle>
                    <CardSubtitle>{ cat.age }</CardSubtitle>
                    <CardText>{ cat.enjoys }</CardText>
                </CardBody>
            </Card>
            </>
          )})}
        </>
)}

export default CatIndex
