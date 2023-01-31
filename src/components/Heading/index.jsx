import { useMyCounterContext } from '../../contexts/CounterContext';

export const Heading = () => {
  const [count, setCount] = useMyCounterContext();

  return <h1>{count.counter}</h1>;
};
