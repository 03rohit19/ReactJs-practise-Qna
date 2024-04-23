import { useState } from "react";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleTotalAmount = () => {
    const total = billAmount + (billAmount * totalAmount) / 100;
    setTotalAmount(total);
  };

  return (
    <div>
      <h1>Tip Calculator</h1>
      <input
        type="number"
        id="billAmount"
        placeholder="0.00"
        value={billAmount}
        onChange={(e) => setBillAmount(parseFloat(e.target.value))}
      />
      <input
        type="number"
        id="tipPercent"
        placeholder="0"
        value={tipPercent}
        onChange={(e) => setTipPercent(parseFloat(e.target.value))}
      />
      <button onClick={handleTotalAmount}>Calculate</button>
      <div id="totalAmount">{totalAmount}</div>
    </div>
  );
};

export default TipCalculator;
