import React, { useState } from 'react'
import { ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


const CatIndex = (props) => {
  const [cat, setCat] = useState()
    return(
        <>
        { props.cats.map((cat, index) => {
          return(
            <ListGroup key={ index }>
              <ListGroupItemHeading>{ cat.name }</ListGroupItemHeading>
                <ListGroupItemText>{ cat.age } - { cat.enjoys }</ListGroupItemText>
            </ListGroup>
          )})}
            </>
)}

export default CatIndex
