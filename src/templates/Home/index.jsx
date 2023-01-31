import { useMyCounterContext } from '../../contexts/CounterContext';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import '../../styles/global-styles.css';

export const Home = () => {
  const [count, setCount] = useMyCounterContext();

  return (
    <div className="title-counter">
      <Heading />
      <div className="btn">
        <Button text="INCREASE" eventClick={setCount.increase} />
        <Button text="DECREASE" eventClick={setCount.decrease} />
        <Button text="RESET" eventClick={setCount.reset} />
        <Button
          text="SET-10"
          eventClick={() => setCount.setCounter({ counter: 10 })}
        />
        <Button
          text="SET-100"
          eventClick={() => setCount.setCounter({ counter: 100 })}
        />
        <Button
          dis={count.loading}
          text="ASYNC-INCREASE"
          eventClick={setCount.asyncIncrease}
        />
        <Button
          dis={count.loading}
          text="ASYNC-ERROR"
          eventClick={setCount.asyncError}
        />
      </div>
    </div>
  );
};
