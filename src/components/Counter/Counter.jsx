import { useSelector, useDispatch } from 'react-redux';
import { update } from 'redux/clicksSlice';

export const Counter = () => {
  const numberOfClick = useSelector(state => state.clicks.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Click: {numberOfClick}</h1>
      <button type="button" onClick={() => dispatch(update(10))}>
        Add 10
      </button>
      <button type="button" onClick={() => dispatch(update(30))}>
        Add 30
      </button>
      <button type="button" onClick={() => dispatch(update(50))}>
        Add 50
      </button>
    </>
  );
};
