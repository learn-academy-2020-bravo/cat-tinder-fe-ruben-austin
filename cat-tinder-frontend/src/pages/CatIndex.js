import React, { useState } from 'react'
import { ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import cats from './cats'

const CatIndex = (props) => {
  const [allCats, setAllCats] = useState(cats)
    return(
        <>
        { allCats.map((cat, index) => {
          return(
            <ListGroup key={ index }>
              <ListGroupItemHeading>{ cat.name }</ListGroupItemHeading>
                <ListGroupItemText>{ cat.age } - { cat.enjoys }</ListGroupItemText>
            </ListGroup>
          )})}
            </>
)}

export default CatIndex
