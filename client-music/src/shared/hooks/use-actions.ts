import { bindActionCreators } from 'redux';
import Actions from '../store/action-creator';
import { useAppDispatch } from '@/shared';

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(Actions, dispatch);
};
