import React, { useState } from 'react';

function calculate() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState('');
  

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const calculateSum = () => {
    const result = Number(num1) + Number(num2);
    setSum(result);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={calculateSum}>Calculate</button>
      {sum && <p>Sum: {sum}</p>}
    </div>
  );
}

export default calculate