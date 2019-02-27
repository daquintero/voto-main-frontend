/* eslint-disable */
import React, { Component } from 'react';
// import { connect } from 'react-redux';

import { Row, Col, Button} from 'reactstrap';

// Redux Actions
// import { getRelatedCorruptionCases } from '../../../redux/actions';
// import { getRelatedIndividuals } from '../../../../Individual/redux/actions';
// import { getRelatedInformativeSnippets } from '../../../../InformativeSnippet/redux/actions';
// import { getRelatedOrganizations } from '../../../../Organization/redux/actions';

// Components
import IndividualCardGrid from '../../../Individual/components/BootCardGrid';
import CorruptionCaseCardGrid from '../../../CorruptionCase/components/CardGrid';
import InformativeCardGrid from '../../../InformativeSnippet/components/BootCardGrid';

// Prop Types
import { RelationshipProps } from '../PagePropTypes';

// TODO REMOVE TEST DATA
import {individualCardData, corruptionCaseCardData, informativeSnippetCardData } from '../SampleDataFullPage';

// TODO Props validation
class Relationships extends Component {
  static propTypes = RelationshipProps;
  // TODO CONNECT TO REDUX
  // componentDidMount() {
  //   this.props.dispatch(getRelatedCorruptionCases(0, 'corruption.corruptioncase', this.props.id));
  //   this.props.dispatch(getRelatedIndividuals(0, 'individuals.individual', this.props.id));
  //   this.props.dispatch(getRelatedInformativeSnippets(0, 'corruption.informativesnippet', this.props.id));
  //   this.props.dispatch(getRelatedOrganizations(0, 'individuals.organizations', this.props.id));
  // }
  render() {
    // const { individuals, corruptionCases, informativeSnippets } = this.props;
    return (
      <Row>
        <Col xs={12} md={12} className="mt-2 p-1" style={{ "background-color" : "#d5dff8"}}>
          <h3 className="p-2">Individuos Relacionados</h3>
          <IndividualCardGrid instances={individualCardData} />
          <Row className="p-2">
            <Button className="small-enlarge rounded-0 text-center border-0 mx-auto bg-more text-dark">
              Más Individuos
            </Button>
          </Row>
        </Col>
        <Col xs={12} md={12} className="mt-2 p-1" style={{ "background-color" : "#f8d5df"}}>
          <h3 className="p-2">Noticias Relacionadas</h3>
          <InformativeCardGrid instances={informativeSnippetCardData} />
        </Col>
        {/* TODO Organization Card Grid */}
        <Col xs={12} md={12} className="mt-2 p-1" style={{ "background-color" : "#dff8d5"}}>
          <h3 className="p-2">Casos de Corrupción Relacionados</h3>
          <CorruptionCaseCardGrid instances={corruptionCaseCardData} />
        </Col>
      </Row>
    );
  }
}

export default Relationships;
// export default connect(state => ({
//   // Related Actions Information
//   organizations: state.openPage.organization.relatedOrganizations,
//   individuals: state.openPage.individual.relatedIndividuals,
//   corruptionCases: state.openPage.corruptionCase.relatedCorruptionCases,
//   informativeSnippets: state.openPage.informativeSnippet.relatedInformativeSnippets,
// }))(Relationships);
