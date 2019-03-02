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
    controversy: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const {
      controversy,
    } = this.props;
    return (
      <Row noGutters className="pb-5 pt-2">
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
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { controversy } = state.openPage.relatedInstances;
  return {
    controversy,
  };
};

export default connect(mapStateToProps)(Relationships);
