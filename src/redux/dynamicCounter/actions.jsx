import { dynamicINCREMENT, dynamicDECREMENT } from "./actionTypes";

export const increment = (value) => {
    return {
        type: dynamicINCREMENT,
        payload: value,
    };
};

export const decrement = (value) => {
    return {
        type: dynamicDECREMENT,
        payload: value,
    };
};