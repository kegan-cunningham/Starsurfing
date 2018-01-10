import * as APIUtil from '../util/request_util';

export const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS';
export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';

export const receiveRequests = requests => ({
  type: RECEIVE_REQUESTS,
  requests,
});

export const receiveRequest = request => ({
  type: RECEIVE_REQUEST,
  request,
});

export const createRequest = request => dispatch => (
  APIUtil.createRequest(request).then(request => (
    dispatch(receiveRequest(request))
  ))
);

export const deleteRequest = (requestId) => dispatch => {
  return (
    APIUtil.deleteRequest(requestId).then(requestId => (
      dispatch(destroyRequest(requestId))
    ))
  );
};

export const fetchRequests = (userId) => dispatch => (
  APIUtil.fetchRequests(userId).then(requests => (
    dispatch(receiveRequests(requests))
  ))
);

export const fetchRequest = (userId) => dispatch => (
  APIUtil.fetchRequest(userId).then(request => (
    dispatch(receiveRequest(request))
  ))
);
