export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADDVALUE = "ADDVALUE";
export const ASYNCADDVALUE = "ASYNCADDVALUE";

export const increment = { type: INCREMENT };
export const decrement = { type: DECREMENT };
export const addValue = (value) => {
  return {
    type: ADDVALUE,
    payload: value,
  };
};

export const asyncAddValue = (value) => async (dispatch) => {
  setTimeout(() => {
    dispatch({ type: ASYNCADDVALUE, payload: value });
  }, 1000);
};
