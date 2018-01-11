export const fetchUser = (userId) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
    error: (err) => console.log(err),
  });
};

export const fetchUsers = () => {
  return $.ajax({
    url: `api/users`,
    method: 'GET',
    error: (err) => console.log(err),
  });
};

export const editUser = (user, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: { user: user },
  });
};

export const createReview = review => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review: review },
  });
};

export const editReview = (review, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/reviews/${id}`,
    data: { review: review },
  });
};

export const deleteReview = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`,
  });
};

export const fetchReviews = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/reviews`,
  })
);
