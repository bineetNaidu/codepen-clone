const { useEffect, useState } = require("react");

const PREFIX = "codepen-clone-";

function useLocalStorage(key, defaultVal) {
  // make a piece of state, base off value keyValue in localStorage ( or default to defaultVal )
  const prefixedKey = PREFIX + key;

  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(
        window.localStorage.getItem(prefixedKey) || String(defaultVal)
      );
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  // use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(prefixedKey, JSON.stringify(state));
  }, [state, prefixedKey]);

  return [state, setState];
}

export default useLocalStorage;
