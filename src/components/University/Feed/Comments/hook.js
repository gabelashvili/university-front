/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();

  const handleDelete = (commentId) => {
    // dispatch(modalActions.setModalState.open());
    console.log(commentId);
  };

  return {
    handleDelete,
  };
};
