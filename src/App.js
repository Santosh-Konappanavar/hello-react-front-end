// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRandomGreeting from './redux/action';
import Greeting from './components/Greeting';

const App = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Hello React Front-end</h1>
      <Greeting greeting={greeting} />
    </div>
  );
};

export default App;
