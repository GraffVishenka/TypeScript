import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreater from "../store/action-creators/";

export const useActions = () => {
  const dispatch: any = useDispatch();
  return bindActionCreators(ActionCreater, dispatch);
};
