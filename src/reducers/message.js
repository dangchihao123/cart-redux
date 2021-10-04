import * as types from "../constants/ActionTypes";
import * as Message from "../constants/Message";

let initialState = Message.MSG_WELCOME;

let message = (state = initialState, action) => {
  switch (action.type) {
    case types.MESSAGE:
      return state;
    default:
      return state;
  }
};

export default message;
