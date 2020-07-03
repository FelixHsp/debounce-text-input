import { useRef, useEffect } from 'rax';
import { TextInputElement } from 'rax-textinput/lib/types';

function useDebounce(fn: (e: TextInputElement) => void, delay: number) {
  const ref = useRef({
    fn,
    timer: null
  });

  useEffect(() => {
    // 更新依赖
    ref.current.fn = fn;
  }, [fn]);

  function foo(...args) {
    if (ref.current.timer) {
      clearTimeout(ref.current.timer);
    }

    ref.current.timer = setTimeout(() => {
      ref.current.fn.call(this, ...args);
    }, delay);
  }

  return foo;
};

export default useDebounce;