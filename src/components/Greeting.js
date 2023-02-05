import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/Greetings/greetingsSlice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  });

  return (
    <div>
      <h2>{greeting.message}</h2>
    </div>
  );
};

export default Greeting;
