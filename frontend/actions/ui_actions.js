export const RECEIVE_FORM_TYPE = "RECEIVE_FORM_TYPE";
export const TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN";
export const TOGGLE_REQUEST_SUCCESS_MESSAGE = "TOGGLE_REQUEST_SUCCESS_MESSAGE";

export const receiveFormType = (formType) => {
  return {
    type: RECEIVE_FORM_TYPE,
    formType,
  };
};

export const toggleDropdown = () => {
  return {
    type: TOGGLE_DROPDOWN,
  };
};

export const toggleRequestSuccessMessage = () => {
  return {
    type: TOGGLE_REQUEST_SUCCESS_MESSAGE,
  };
};
