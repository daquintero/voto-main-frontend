import {
  GET_MORE_RELATED_INSTANCES,
} from './actionCreators';
import service from '../service';


export const getMoreRelatedInstances = requestData => (dispatch) => { // eslint-disable-line
  dispatch({
    type: GET_MORE_RELATED_INSTANCES.REQUEST,
    modelLabel: requestData.ml,
  });
  return service.get.instances(requestData).then(
    response =>
      dispatch({
        type: GET_MORE_RELATED_INSTANCES.SUCCESS,
        response: response.data,
        modelLabel: requestData.ml,
      }),
    error =>
      dispatch({
        type: GET_MORE_RELATED_INSTANCES,
        error,
        modelLabel: requestData.ml,
      }),
  );
};
