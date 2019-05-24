export const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
  history: [],
  operationNumber: 0,
  isSidemenuOpen: false
};

const handleNumber = (value, state) => {
  if (state.currentValue === '0') {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${state.currentValue}${value}`
  };
};

function handleEqual(state) {
  const { currentValue, previousValue, operator, history } = state;

  //const currentValue = state.currentValue;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);

  const resetState = {
    operator: null,
    previousValue: null
  };

  if (operator === '/') {
    const currentValue = previous / current;
    return {
      currentValue,
      history: [...history, currentValue],
      operationNumber: ++state.operationNumber,
      ...resetState
    };
  }

  if (operator === '*') {
    const currentValue = previous * current;
    return {
      currentValue,
      history: [...state.history, currentValue],
      operationNumber: ++state.operationNumber,
      ...resetState
    };
  }

  if (operator === '+') {
    const currentValue = previous + current;
    return {
      currentValue,
      history: [...state.history, currentValue],
      operationNumber: ++state.operationNumber,
      ...resetState
    };
  }

  if (operator === '-') {
    const currentValue = previous - current;
    return {
      currentValue,
      history: [...state.history, currentValue],
      operationNumber: ++state.operationNumber,
      ...resetState
    };
  }

  return state;
}

const calculator = (type, value, state) => {
  switch (type) {
    case 'number':
      return handleNumber(value, state);
    case 'operator':
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: '0'
      };
    case 'equal':
      return handleEqual(state);
    case 'clear':
      return { ...initialState, history: state.history };
    case 'posneg':
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`
      };
    case 'percentage':
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      };
    case 'sin':
      return {
        currentValue: `${Math.round(
          Math.sin(parseFloat(state.currentValue) * (Math.PI / 180))
        )}`
      };
    case 'cos':
      return {
        currentValue: `${Math.round(
          Math.cos(parseFloat(state.currentValue) * (Math.PI / 180))
        )}`
      };
    case 'tan':
      return {
        currentValue: `${Math.round(
          Math.tan(parseFloat(state.currentValue) * (Math.PI / 180))
        )}`
      };
    case 'atan':
      return {
        currentValue: `${Math.round(
          Math.atan(parseFloat(state.currentValue) * (Math.PI / 180))
        )}`
      };
    case 'asin':
      return {
        currentValue: `${Math.round(
          Math.asin(parseFloat(state.currentValue) * (Math.PI / 180))
        )}`
      };
    case 'acos':
      return {
        currentValue: `${Math.round(
          Math.acos(parseFloat(state.currentValue) * (Math.PI / 180))
        )}`
      };
    //radians
    case 'log':
      return {
        currentValue: `${Math.log(parseFloat(state.currentValue))}`
      };
    case 'ln':
      return {
        currentValue: `${Math.log10(parseFloat(state.currentValue))}`
      };
    default:
      return state;
  }
};

export default calculator;
