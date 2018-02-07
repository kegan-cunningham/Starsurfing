export const createRequest = request => {
  return $.ajax({
    method: 'POST',
    url: 'api/requests',
    data: { request: request },
  });
};

export const deleteRequest = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/requests/${id}`,
  });
};

export const fetchRequests = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/requests`,
  })
);

export const editRequest = (request, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/requests/${id}`,
    data: { request: request },
  });
};

export const fetchRequest = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/requests/request`,
  })
);
