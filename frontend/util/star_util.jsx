export const fetchStars = (query) => {
  return $.ajax({
    url: 'api/stars',
    method: 'GET',
    error: (err) => console.log(err),
    data: { query: query }
  });
};

export const fetchStar = (starId) => {
  return $.ajax({
    url: `api/stars/${starId}`,
    method: 'GET',
    error: (err) => console.log(err),
  });
};
