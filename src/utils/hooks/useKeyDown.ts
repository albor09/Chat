import { useEffect } from "react";

const useKeyDown = (keycode: string, callback: Function, deps: React.DependencyList) => {
  useEffect(() => {
    const cb = (event: KeyboardEvent) => {
      if (event.key == keycode) {
        callback();
      }
    };
    window.addEventListener("keydown", cb);
    return () => {
      window.removeEventListener("keydown", cb);
    };
  }, deps);
};

export default useKeyDown;
