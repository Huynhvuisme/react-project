import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import useReactSwitchTheme from "react-switch-theme"

const colors = {
    light: {
      background: "#fff",
      color: "#000"
    },
    dark: {
      background: "#000",
      color: "#fff"
    }
  };
  const themeOptions = {
    colors,
    activeMode: "light",
    offlineStorageKey: "react-random-key"
  };
  
  function SwapTheme() {
    const [theme, setDiffTheme] = useReactSwitchTheme(themeOptions);
    // useEffect(() => {
    //   
    // }, [theme]);
  
    return (
      <div className="App">
        <button type="button" onClick={() => setDiffTheme()}>
          Click to change theme
        </button>
      </div>
    );
  }
export default SwapTheme;