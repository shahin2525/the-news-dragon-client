import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h1>this is terms and condition page </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos,
        laborum odio unde officiis nisi est obcaecati, tenetur facere debitis
        dolorem quasi exercitationem alias, atque inventore corporis voluptate
        fugit soluta ducimus aliquid voluptates eligendi quam? Esse eius
        incidunt mollitia debitis.
      </p>

      <p>
        <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
