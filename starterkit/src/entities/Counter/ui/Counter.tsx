import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { Button } from "antd";

export const Counter: FC = memo(() => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      Тестовое изменение
      <div data-testid="title-header">{counterValue}</div>
      <Button data-testid="increment-btn" onClick={handleIncrement}>
        +
      </Button>
      <Button data-testid="decrement-btn" onClick={handleDecrement}>
        -
      </Button>
    </>
  );
});
