export const sign_up = (user) => {
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user }
  });
};

export const log_in = (user) => {
  return $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user }
  });
};

export const log_out = () => {
  return $.ajax({
    url: 'api/session',
    method: 'DELETE',
  });
};
