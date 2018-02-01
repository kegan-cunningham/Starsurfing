export const fetchStars = (query) => {
  return $.ajax({
    url: 'api/stars',
    method: 'GET',
    data: { query: query },
  });
};

export const fetchStar = (starId) => {
  return $.ajax({
    url: `api/stars/${starId}`,
    method: 'GET',
  });
};
