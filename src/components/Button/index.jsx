import P from 'prop-types';
import { useMyCounterContext } from '../../contexts/CounterContext';

export const Button = ({ text, eventClick, dis }) => {
  const [count, setCount] = useMyCounterContext();
  return (
    <button disabled={dis} onClick={eventClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  eventClick: P.func.isRequired,
  dis: P.bool,
};
