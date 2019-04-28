export const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
  history: [],
  operationNumber: 0
};

export const handleNumber = (value, state) => {
  if (state.currentValue === '0') {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${state.currentValue}${value}`
  };
};

export const handleEqual = state => {
  const { currentValue, previousValue, operator } = state;

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
      history: [...state.history, currentValue],
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
};

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
      return initialState;
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
        currentValue: `${Math.sin(parseFloat(state.currentValue))}`
      };
    case 'cos':
      return {
        currentValue: `${Math.cos(parseFloat(state.currentValue))}`
      };
    case 'tan':
      return {
        currentValue: `${Math.tan(parseFloat(state.currentValue))}`
      };
    case 'atan':
      return {
        currentValue: `${Math.atan(parseFloat(state.currentValue))}`
      };
    case 'asin':
      return {
        currentValue: `${Math.asin(parseFloat(state.currentValue))}`
      };
    case 'acos':
      return {
        currentValue: `${Math.acos(parseFloat(state.currentValue))}`
      };
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
