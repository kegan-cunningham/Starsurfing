export const RECEIVE_FORM_TYPE = "RECEIVE_FORM_TYPE";
export const TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN";

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
