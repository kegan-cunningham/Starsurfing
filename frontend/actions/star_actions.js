import * as APIUtil from '../util/star_util';

export const RECEIVE_STARS = 'RECEIVE_STARS';
export const RECEIVE_STAR = 'RECEIVE_STAR';

export const receiveStars = stars => ({
  type: RECEIVE_STARS,
  stars,
});

export const receiveStar = star => ({
  type: RECEIVE_STAR,
  star,
});

export const fetchStars = () => dispatch => (
  APIUtil.fetchStars().then(stars => (
    dispatch(receiveStars(stars))
  ))
);

export const fetchStar = id => dispatch => (
  APIUtil.fetchStar(id).then(star => (
    dispatch(receiveStar(star))
  ))
);
