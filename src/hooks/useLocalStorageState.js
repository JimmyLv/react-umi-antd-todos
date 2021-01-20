import React from "react";

// TODO: move this to dva reducer
export function useLocalStorageState(key, initValue = "") {
  const [value, setValue] = React.useState(() => {
    let item = window.localStorage.getItem(key);
    return JSON.parse(item) || initValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
