export const fetchStars = () => {
  return $.ajax({
    url: 'api/stars',
    method: 'GET',
    error: (err) => console.log(err)
  });
};

export const fetchStar = (starId) => {
  return $.ajax({
    url: `api/stars/${starId}`,
    method: 'GET',
    error: (err) => console.log(err)
  });
};
