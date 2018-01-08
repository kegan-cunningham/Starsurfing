export const fetchUser = (userId) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
    error: (err) => console.log(err),
  });
};
