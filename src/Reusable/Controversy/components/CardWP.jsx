// Controversy Card
// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

// Category Repository
import categoryInfo from '../../../shared/utils/categoryInfo';

// Functions
import relTopCreator from '../../Individual/components/relTopCreator';
import squashString from '../../../shared/utils/squashString';
import wrapper from '../../../shared/utils/wrapper';

// Actions
import { INSTANCE_DETAIL, TOGGLE_INSTANCE_DETAIL_MODAL } from '../../redux/actionCreators';


class CardWithParent extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    light: PropTypes.bool.isRequired,

    // Redux
    dispatch: PropTypes.func.isRequired,
  };

  handleOnClick = () => {
    const { dispatch, instance } = this.props;
    dispatch({
      type: INSTANCE_DETAIL,
      instance,
    });
    dispatch({
      type: TOGGLE_INSTANCE_DETAIL_MODAL,
    });
  };

  render() {
    // Props
    const {
      instance, light,
    } = this.props;

    return (
      <div className={`span-6-cols ${light ? 'bg-layout' : 'bg-shady-layout'} shadow small-enlarge`}>
        {relTopCreator(instance)}
        <div>
          <Card className="border-0 rounded-0">
            <CardBody onClick={this.handleOnClick} className="p-2">
              <p className="p-1 m-0 small">
                {squashString(instance.briefDescription, 140)}
                <span className="text-black-50"> {instance.briefDescription.length > 140 && 'averigua mas'}</span>
              </p>
            </CardBody>
            {categoryInfo[instance.type] && (
              <CardHeader className="pt-1 pb-1 ">
                {categoryInfo[instance.type] !== 'None' && (
                  <i className={`float-left fal text-black-50 p-2 fa-${categoryInfo[instance.type].icon}`} />
                )}
                <p className="float-right small mb-0 text-black-50 text-uppercase small">
                  {categoryInfo[instance.type].spanish}
                </p>
              </CardHeader>
            )}
          </Card>
        </div>
      </div>
    );
  }
}

export default wrapper({
  component: CardWithParent,
  wrappers: [
    connect(),
  ],
});
