import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Cat Tinder</h1>
          <p className="lead">It's like tinder but for Cats!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
