export const fetchUsers = () => {
  return $.ajax({
    url: 'api/users',
    method: 'GET',
    error: (err) => console.log(err),
  });
};

export const fetchUser = (userId) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
    error: (err) => console.log(err),
  });
};
