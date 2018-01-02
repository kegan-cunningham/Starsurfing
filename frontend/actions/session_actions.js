export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const log_in = (user) => {
  return {
    type: LOG_IN,
    user
  };
};

export const log_out = () => {
  return {
    type: LOG_OUT
  };
};

export const sign_up = (user) => {
  return {
    type: SIGN_UP,
    user
  };
};

export const receive_current_user = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receive_session_errors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};
