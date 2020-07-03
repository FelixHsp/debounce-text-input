import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import MyComponent from 'debounce-text-input';

render(<MyComponent defaultValue={1} onInput={(e) => console.log(e)} debounceInterval={500}/>, document.body, { driver: DriverUniversal });
