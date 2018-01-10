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
    url: `api/users/${userId}/requests`,
  })
);

export const fetchRequest = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/request`,
  })
);
