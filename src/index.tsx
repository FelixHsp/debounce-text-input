import { createElement, Fragment, useState, useEffect, useRef, forwardRef } from 'rax';
import TextInput from 'rax-textinput';
import { EventObject } from 'rax-textinput/lib/types';

import useDebounce from './utils/useDebounce';

interface IMyTextInput {
  value?: string;
  defaultValue?: string;
  key?: string;
  debounceInterval?: number;
  onInput?: (e: EventObject) => void;
  [textInputProps: string]: any;
};

const DebounceTextInput = forwardRef((props: IMyTextInput, ref) => {
  const {
    value,
    defaultValue,
    key,
    debounceInterval,
    onInput = () => {},
    ...textInputProps
  } = props;

  const [inputDefaultValue, setInputDefaultValue] = useState<string>(value || defaultValue);
  const [inputValue, setInputValue] = useState<string>(value || defaultValue);
  const [inputKey, setInputKey] = useState<number>(0);
  const flag = useRef(false);

  const onTextInput = debounceInterval ? useDebounce((e: EventObject) => onInput(e), debounceInterval) : onInput;

  useEffect(() => {
    if (value === inputValue || !flag.current) {
      flag.current = true;
      return;
    }
    setTimeout(() => {
      setInputKey(inputKey + 1);
      setInputValue(value);
      setInputDefaultValue(value);
    }, 20);

  }, [value]);

  return (
    <Fragment>
      <TextInput ref={ref}
                 key={`${key ? `${key}_${inputKey}` : inputKey}`}
                 defaultValue={inputDefaultValue}
                 onInput={(e: EventObject) => {
                   setInputValue(e.value);
                   onTextInput(e);
                 }}
                 {...textInputProps}/>
    </Fragment>
  );
});

export default DebounceTextInput;
