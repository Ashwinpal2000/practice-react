import { useState, useEffect } from "react";
import "../App.css";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    if (inputValue.length > 0) {
      const timer = setTimeout(() => {
        setDisplayValue(inputValue);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInputValue("");
    }, 1);
    return () => clearTimeout(timer);
  }, [displayValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>1. Input Para box</h1>
      <br />
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {displayValue && <p>The input value is: {displayValue}</p>}
    </div>
  );
}

export default App;
