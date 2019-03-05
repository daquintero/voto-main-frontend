import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

const conteo = `${process.env.PUBLIC_URL}/img/conteo.png`;

const NotFound404 = () => (
  <Container className="justify-content-center text-center py-4 bg-layout">
    <img className="not-found__image" src={conteo} alt="404" />
    <h3 className="p-2">¡Ayala, algo se chispoteó!</h3>
    <h4>No te estamos chifeando. ¡No podemos encontrar la página que buscas!</h4>
    <Link className="bg-shady-layout btn rounded-0 border-0 my-4" to="/">
      <h4><i className="fal fa-home p-2" />Vuelve allá adonde uno</h4>
    </Link>
  </Container>
);

export default NotFound404;
