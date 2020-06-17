import React, {useState} from 'react'
import { ListGroupItemText, ListGroupItemHeading, ListGroup } from 'reactstrap'
import cats from '../cats.js'

const CatShow = (props) => {
    const [oneCat, setOneCat] = useState(cats)
      return(
          <>
          { oneCat.find((cat, index) => {
            return(
              <>
              <p>one cat.</p>
              <ListGroup key={ index }>
                <ListGroupItemHeading>{ cat.name }</ListGroupItemHeading>
                  <ListGroupItemText>{ cat.age } - { cat.enjoys }</ListGroupItemText>
              </ListGroup>
              </>
            )})}
          </>
  )}