export const RECEIVE_FORM_TYPE = "RECEIVE_FORM_TYPE";

export const receiveFormType = (formType) => {
  return {
    type: RECEIVE_FORM_TYPE,
    formType
  };
};
