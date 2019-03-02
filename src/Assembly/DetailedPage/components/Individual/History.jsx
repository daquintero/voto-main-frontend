/* eslint-disable no-nested-ternary */
// TODO maybe fix the ternarys
// Controvery, Experience, Promises and More
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';

// Components
import CardGrid from '../../../../Reusable/Grid/components/DetailedReduxCardGrid';

class Relationships extends PureComponent {
  static propTypes = {
    experience: PropTypes.instanceOf(Array).isRequired,
    promise: PropTypes.instanceOf(Object).isRequired,
    controversy: PropTypes.instanceOf(Object).isRequired,
    achievement: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const {
      experience, promise, controversy, achievement,
    } = this.props;
    return (
      <Row noGutters className="pb-5 pt-2">
        <div className="subsection-grid">
          {/* Bit hacky grid arrangement approach */}
          <div
            className={`mt-2 p-1 bg-shady-layout
           ${experience[0] ?
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
           ${controversy.instances[0] ?
              (controversy.instances.length < 3 ? 'span-2-rows' : 'span-5-rows') : 'span-2-rows'}`}
            style={{ background: '#ffeff9' }}
          >
            <Row noGutters>
              <CardGrid
                relatedModelLabel="political.Controversy"
                gridClass="variable-grid"
                instances={controversy}
                subsetNumber={controversy}
                light
              />
            </Row>
          </div>
          <div
            className={`mt-2 p-1
            ${promise.instances[0] ? (promise.instances.length < 3 ? '' : 'span-5-rows') : ''}`}
            style={{ background: '#fff5ef' }}
          >
            <Row noGutters>
              <CardGrid
                relatedModelLabel="political.Promise"
                gridClass="variable-grid"
                instances={promise.instances}
                subsetNumber={promise.subsetNumber}
                light
              />
            </Row>
          </div>
          <div
            className={`mt-2 p-1 bg-layout
            ${achievement.instances[0] ? (achievement.instances.length < 3 ? '' : 'span-5-rows') : ''}`}
            style={{ background: '#effff5' }}
          >
            <Row noGutters>
              <CardGrid
                relatedModelLabel="political.Achievement"
                gridClass="variable-grid"
                instances={achievement.instances}
                subsetNumber={achievement.subsetNumber}
                light
              />
            </Row>
          </div>
        </div>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { experience } = state.openPage.parentInstance;
  const { promise, controversy, achievement } = state.openPage.relatedInstances;
  return {
    experience,
    promise,
    controversy,
    achievement,
  };
};

export default connect(mapStateToProps)(Relationships);
