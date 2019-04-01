// Law Card

// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Col, Row } from 'reactstrap';

import typeBanner from '../../typeBanner';

const LawCardWP = ({ instance, typeContext }) => (
  <ListGroupItem
    className={`${typeContext === 'relation' ? 'list-right' : 'small-enlarge'}
         shadow span-4-cols border-0 rounded-0 p-0`}
    tag="a"
    href={instance.source}
  >
    <Row noGutters className="p-3">
      <Col xs={12} >
        <h5 className="small m-0 p-0"> No. <i className="fal fa-gavel" /> </h5>
        <h5 className="p-1 m-0 lead">{instance.code}</h5>
      </Col>
      <Col xs={12} className="pl-3 pb-3">
        <p className="small text-left m-0">{instance.briefDescription}</p>
      </Col>
    </Row>
    {typeBanner('Ley')}
  </ListGroupItem>
);

LawCardWP.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
  typeContext: PropTypes.string.isRequired,
};

export default LawCardWP;
