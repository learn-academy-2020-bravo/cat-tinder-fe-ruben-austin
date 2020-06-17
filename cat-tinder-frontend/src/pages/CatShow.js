import React, { useState } from 'react'
import { ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import cats from '../cats'


const CatShow = ({props}) => {
  console.log(props)
  const {match} = props
  console.log(match)

  let cat = cats.find(cat => cat.id === Number(match.params.id))
  console.log(cat);
    return(
        <>
            <p>THE BEST CAT.</p>
            <ListGroup key={ match.params.id }>
              <ListGroupItemHeading>{ cat.name }</ListGroupItemHeading>
                <ListGroupItemText>{ cat.age } - { cat.enjoys }</ListGroupItemText>
            </ListGroup>
        </>
)}

export default CatShow
