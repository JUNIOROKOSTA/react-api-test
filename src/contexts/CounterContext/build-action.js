import * as actionTypes from './action-types';

export const buildActions = (dispatch) => {
  // console.log('build->', dispatch);
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
    decrease: () => dispatch({ type: actionTypes.DECREASE }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    setCounter: (payload) =>
      dispatch({ type: actionTypes.SET_COUNTER, payload }),
    asyncIncrease: () => asyncIncreaseFunc(dispatch),
    asyncError: () => asyncErrorFunc(dispatch),
  };
};

const asyncIncreaseFunc = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((r) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_END });

      r('Resolved!');
    }, 3000);
  });
};

const asyncErrorFunc = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((r, reject) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_ERROR });

      reject(new Error('Deu Ruim!'));
    }, 3000);
  });
};
