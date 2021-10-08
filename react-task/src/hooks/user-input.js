import { useState } from 'react';

const useInput = (validateValue, alertText) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [warningText, setWarningText] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setWarningText(alertText);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
    setWarningText(alertText);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  const inputClass = hasError
    ? 'block w-full px-4 py-2 mt-2 text-gray-900 bg-white border-2 border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600'
    : 'rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent';

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    inputClass: inputClass,
    warningText: warningText,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
