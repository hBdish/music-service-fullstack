import {useAppDispatch} from "@/store/hooks/hooks";
import {bindActionCreators} from "redux";
import Actions  from "../action-creator/action-creator";

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(Actions, dispatch)
}