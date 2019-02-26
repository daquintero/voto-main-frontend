// Main Grid for the important sections
// Libraries
import React, { PureComponent } from 'react';
import { Row } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Card Selector
import CardSelector from '../../../shared/components/cardSelector';

// Declaration
class MainGrid extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { instances } = this.props;
    return (
      <Row noGutters>
        {/* All cards must have images and 2 and 3 must have a specific layoutMap */}
        {instances && instances[2] ? (
          <div className="main-grid p-2">
            <div className="main-1">
              {CardSelector(instances[0])}
            </div>
            <div className="main-2">
              {CardSelector(instances[1])}
            </div>
            <div className="main-3">
              {CardSelector(instances[2])}
            </div>
            {/* Shown in the larger screens */}
            {instances[4] ? (
              <>
                <div className="main-4 d-none d-lg-block">
                  {CardSelector(instances[3])}
                </div>
                <div className="main-5 d-none d-lg-block">
                  {CardSelector(instances[4])}
                </div>
              </>
            ) : null}
          </div>
        ) : null}
      </Row>
    );
  }
}

// TODO State Store Connection
export default MainGrid;
// -------------- BOOTSTRAP Implementation --------------
// <Row noGutters className="align-content-center">
//         {instances && instances[2] ? (
//           <>
//             <Col md={6} xl={4} className="p-2">
//               {CardSelector(instances[0])}
//             </Col>
//             <Col md={3} xl={2} className="p-2">
//               {CardSelector(instances[1])}
//             </Col>
//             <Col md={3} xl={2} className="p-2">
//               {CardSelector(instances[2])}
//             </Col>
//             {/* Shown in the larger screens */}
//             {instances[4] ? (
//               <>
//                 <Col xl={2} className="d-none d-xl-block p-2">
//                   {CardSelector(instances[3])}
//                 </Col>
//                 <Col xl={2} className="d-none d-xl-block p-2">
//                   {CardSelector(instances[4])}
//                 </Col>
//               </>
//             ) : null}
//           </>
//         ) : null}
//       </Row>
