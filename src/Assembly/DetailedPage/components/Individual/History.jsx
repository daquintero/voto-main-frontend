/* eslint-disable no-nested-ternary */
// TODO maybe fix the ternarys
// Controvery, Experience, Promises and More
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// Components
import CardGrid from '../../../../Reusable/Grid/components/DetailedReduxCardGrid';

class Relationships extends PureComponent {
  static propTypes = {
    experience: PropTypes.instanceOf(Array).isRequired,
    promises: PropTypes.instanceOf(Object).isRequired,
    controversies: PropTypes.instanceOf(Object).isRequired,
    achievements: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const {
      experience, promises, controversies, achievements,
    } = this.props;
    return (
      <Row noGutters className="pb-5 pt-2">
        <Col className="p-2">
          <div className="subsection-grid">
            <div
              className={`mt-2 p-1 bg-above-background
                ${experience && experience[0] ?
                  (experience.length < 3 ? '' : 'span-5-rows') : ''}`}
            >
              <Row noGutters className="justify-content-center p-0">
                <CardGrid
                  relatedModelLabel="political.Experience"
                  gridClass="variable-grid"
                  instances={experience}
                  subsetNumber={experience}
                  light
                />
              </Row>
            </div>
            <div
              className={`mt-2 p-1
           ${controversies.instances[0] ?
              (controversies.instances.length < 3 ? '' : 'span-5-rows') : ''}`}
              style={{ background: '#ffeff9' }}
            >
              <Row noGutters>
                <CardGrid
                  relatedModelLabel="political.Controversy"
                  gridClass="variable-grid"
                  instances={controversies.instances}
                  subsetNumber={controversies.subsetNumber}
                  light
                />
              </Row>
            </div>
            <div
              className={`mt-2 p-1
            ${promises.instances[0] ? (promises.instances.length < 3 ? '' : 'span-5-rows') : ''}`}
              style={{ background: '#fff5ef' }}
            >
              <Row noGutters>
                <CardGrid
                  relatedModelLabel="political.Promise"
                  gridClass="variable-related-grid"
                  instances={promises.instances}
                  subsetNumber={promises.subsetNumber}
                  light
                />
              </Row>
            </div>
            <div
              className={`mt-2 p-1
            ${achievements.instances[0] ? (achievements.instances.length < 3 ? '' : 'span-5-rows') : ''}`}
              style={{ background: '#effff5' }}
            >
              <Row noGutters>
                <CardGrid
                  relatedModelLabel="political.Achievement"
                  gridClass="variable-related-grid"
                  instances={achievements.instances}
                  subsetNumber={achievements.subsetNumber}
                  light
                />
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { experience } = state.openPage.parentInstance;
  const { promises, controversies, achievements } = state.openPage.relatedInstances;
  return {
    experience,
    promises,
    controversies,
    achievements,
  };
};

export default connect(mapStateToProps)(Relationships);
