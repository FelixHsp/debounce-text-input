## debounce-text-input

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
|debounceInterval|number|300|onInput事件防抖间隔（若为0则不开启防抖）|
|rax-textinput所有属性|-|-|-|

## Example

```
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import DebounceTextInput from 'debounce-text-input';

render(<DebounceTextInput value={1} onInput={(e) => console.log(e)} debounceInterval={500}/>, document.body, { driver: DriverUniversal });
```
