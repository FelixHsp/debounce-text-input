import { createElement, Fragment, useState, useEffect, useRef } from 'rax';
import TextInput from 'rax-textinput';
import { TextInputElement } from 'rax-textinput/lib/types';

import useDebounce from './utils/useDebounce';

interface IMyTextInput {
  value?: string;
  defaultValue?: string;
  key?: string;
  debounceInterval?: number;
  onInput?: (e: TextInputElement) => void;
  [textInputProps: string]: any;
};

const DebounceTextInput = (props: IMyTextInput) => {
  const {
    value,
    defaultValue,
    key,
    debounceInterval,
    onInput = () => {},
    ...textInputProps
  } = props;

  const [inputValue, setInputValue] = useState<string>(value || defaultValue);
  const [inputKey, setInputKey] = useState<number>(0);
  const flag = useRef(false);

  const onTextInput = debounceInterval ? useDebounce((e: TextInputElement) => onInput(e), debounceInterval) : onInput;

  useEffect(() => {
    if (value === inputValue || !flag.current) {
      flag.current = true;
      return;
    }
    setTimeout(() => {
      setInputKey(inputKey + 1);
      setInputValue(value);
    }, 20);

  }, [value]);

  return (
    <Fragment>
      <TextInput key={`${key ? `${key}_${inputKey}` : inputKey}`}
                 defaultValue={inputValue}
                 onInput={(e: TextInputElement) => {
                   setInputValue(e.value);
                   onTextInput(e);
                 }}
                 {...textInputProps}/>
    </Fragment>
  );
};

export default DebounceTextInput;
