import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createString } from './redux/Slice/userSlice';
const App = () => {
  const user = useSelector((state) => state.user.test);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello World</h1>
      <p>{user}</p>
      <button onClick={() => dispatch(createString())}>Click me</button>
    </div>
  );
};

export default App;
