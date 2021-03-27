import { useEffect } from 'react';
import { actions as todoActions, selectors as todoSelectors } from 'modules/TestModule';
import { useSelector, useDispatch } from 'react-redux';

const TestComponent = () => {
  const dispatch = useDispatch();
  const todo = useSelector(todoSelectors.selectTodo);

  useEffect(() => {
    dispatch(todoActions.getTodo.request(1));
  }, []);

  useEffect(() => {
    console.log(todo, process.env.REACT_APP_ENVIROMENT);
  }, [todo]);

  return (
    <div>
      TestComponent
    </div>
  );
};

export default TestComponent;
