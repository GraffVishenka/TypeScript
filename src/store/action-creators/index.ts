import * as UserActionCreators from "./user";
import * as TodoActionCreators from "./todo";

const ActionCreater = {
  ...TodoActionCreators,
  ...UserActionCreators,
};

export default ActionCreater;