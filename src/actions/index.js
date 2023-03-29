export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADDVALUE = "ADDVALUE";

export const increment = { type: INCREMENT };
export const decrement = { type: DECREMENT };
export function addvalue(value) {
  return {
    type: ADDVALUE,
    payload: value,
  };
}
