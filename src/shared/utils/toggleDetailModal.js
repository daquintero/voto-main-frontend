import { TOGGLE_INSTANCE_DETAIL_MODAL } from '../../Reusable/redux/actionCreators';

export default dispatch => () => {
  dispatch({
    type: TOGGLE_INSTANCE_DETAIL_MODAL,
  });
};
