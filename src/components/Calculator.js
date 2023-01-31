import React, { useState, useEffect } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (num1 !== "" && num2 !== "") {
      setResult("");
    }
  }, [num1, num2]);

  const handleAdd = () => {
    setResult(+num1 + +num2);
  };

  const handleSubtract = () => {
    setResult(+num1 - +num2);
  };

  const handleMultiplication = () => {
    setResult(+num1 * +num2);
  };

  const handleDivision = () => {
    setResult(+num1 / +num2);
  };

  return (
    <div  className="text-center">
      <div>
        <label>Number 1:</label>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label>Number 2:</label>
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-primary m-3" onClick={handleAdd}>
          Add
        </button>
        <button className="btn btn-primary m-2" onClick={handleSubtract}>
          Subtract
        </button>
        <button className="btn btn-primary m-2" onClick={handleMultiplication}>
          Multiplication
        </button>
        <button className="btn btn-primary m-2" onClick={handleDivision}>
          Division
        </button>
      </div>
      {result !== "" ? <h2>Result: {result}</h2> : null}
    </div>
  );
}

export default Calculator;
