## debounce-text-input

## Describe
改写Rax的TextInput的onInput事件，并增加防抖处理

## Install

```
$ npm install debounce-text-input --save
```

## Usage

```
import DebounceTextInput from 'debounce-text-input';
```

## API

### Props

|name|type|default|describe|
|:---------------|:--------|:----|:----------|
|value|String|''|文本框的文字内容 (受控)|
|defaultValue|String|''|文本框的文字内容 (非受控)|
|debounceInterval|number|0|onInput事件防抖间隔（若为0则不开启防抖）|
|rax-textinput所有属性|-|-|-|

## Example

```
import { createElement, useState, Fragment } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import DebounceTextInput from 'debounce-text-input';
import { EventObject } from 'rax-textinput/lib/types';

import './index.css';
function SearchInput() {
  const [value, setValue] = useState<string>('');

  const onInput = (text: string) => {
    setValue(text);
    
    // 网络请求
    // ...
  }

  return (
    <Fragment>
      <View className="container">
        <DebounceTextInput className="input"
                           value={value}
                           debounceInterval={600}
                           onInput={(e: EventObject) => onInput(e.value)}/>
        {
          value
          && (
            <Text onClick={() => onInput('')}>
              清空
            </Text>
          )
        }
      </View>
      <Text>
        debounceInterval: 600
      </Text>
      <Text>
        value: {value}
      </Text>
      <Text onClick={() => onInput('felix')}>
        set: felix
      </Text>
    </Fragment>
  );
}

export default SearchInput;
```
