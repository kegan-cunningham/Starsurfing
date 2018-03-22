import * as APIUtil from '../util/request_util';

export const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS';
export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const DESTROY_REQUEST = 'DESTROY_REQUEST';
export const RECEIVE_REQUEST_ERRORS = 'RECEIVE_REQUEST_ERRORS';
export const CLEAR_REQUEST_ERRORS = 'CLEAR_REQUEST_ERRORS';

export const receiveRequests = requests => ({
  type: RECEIVE_REQUESTS,
  requests,
});

export const receiveRequest = request => ({
  type: RECEIVE_REQUEST,
  request,
});


export const destroyRequest = ({ id }) => {
  return {
    type: DESTROY_REQUEST,
    requestId: id,
  };
};

export const receiveRequestErrors = (errors) => {
  return {
    type: RECEIVE_REQUEST_ERRORS,
    errors,
  };
};

export const clearRequestErrors = () => {
  return {
    type: CLEAR_REQUEST_ERRORS,
  };
};

export const createRequest = request => dispatch => (
  APIUtil.createRequest(request).then(
    request => {return dispatch(receiveRequest(request))},
    errors => {return dispatch(receiveRequestErrors(errors.responseJSON));}
  )
);

export const editRequest = (request, requestId) => dispatch => (
  APIUtil.editRequest(request, requestId).then(request => (
    dispatch(receiveRequest(request)),
    errors => {
      return dispatch(receiveRequestErrors(errors.responseJSON));
    }
  ))
);

export const deleteRequest = (requestId) => dispatch => {
  return (
    APIUtil.deleteRequest(requestId).then(requestId => (
      dispatch(destroyRequest(requestId)),
    ))
  );
};

export const fetchRequests = (userId) => dispatch => (
  APIUtil.fetchRequests(userId).then(requests => (
    dispatch(receiveRequests(requests)),
  ))
);

export const fetchRequest = (userId) => dispatch => (
  APIUtil.fetchRequest(userId).then(request => (
    dispatch(receiveRequest(request)),
  ))
);
