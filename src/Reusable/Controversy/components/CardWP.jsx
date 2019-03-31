// Controversy Card
// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

// Functions
import relTopCreator from '../../Individual/components/relTopCreator';
import squashString from '../../../shared/utils/squashString';
import wrapper from '../../../shared/utils/wrapper';

// Actions
import { INSTANCE_DETAIL, TOGGLE_INSTANCE_DETAIL_MODAL } from '../../redux/actionCreators';
import typeBanner from '../../typeBanner';


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
      <div className={`span-6-cols ${light ? 'bg-layout' : 'bg-shady-layout'} shadow small-enlarge p-rel`}>
        {relTopCreator(instance)}
        <a target="_blank" rel="noreferrer noopener" href={instance.source}>
          <Card className="border-0 rounded-0">
            <CardBody onClick={this.handleOnClick} className="p-2 pb-4">
              <p className="p-1 m-0 small">
                {squashString(instance.briefDescription, 140)}
                <span className="text-black-50"> {instance.briefDescription.length > 140 && 'averigua mas'}</span>
              </p>
            </CardBody>
          </Card>
        </a>
        {typeBanner('Controversia')}
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
