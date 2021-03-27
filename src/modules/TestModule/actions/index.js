import { constants } from 'modules/TestModule';

export const getTodo = ({
  request: (todoId) => ({
    type: constants.TODO_REQUESTED,
    payload: {
      todoId,
    },
  }),
  succeed: (response) => ({
    type: constants.TODO_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.TODO_FAILED,
    error,
  }),
});
