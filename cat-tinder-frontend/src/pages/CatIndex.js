import React from 'react'
import { ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Cats from '../../cats'

const CatIndex = (props) => {
  return (
    <React.Fragment>
      <ListGroup>
        <ListGroupItemHeading>Cat One</ListGroupItemHeading>
        <ListGroupItemText>Cat Age - Cat Enjoys</ListGroupItemText>
       </ListGroup>
    </React.Fragment>
  )
}
export default CatIndex
