import React, { useState, useEffect } from 'react';

interface LoanCalculatorProps {
  loanAmount: number;
  setLoanAmount: (amount: number) => void;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({ loanAmount, setLoanAmount }) => {
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const rate = 0.03217 / 12; // Monthly interest rate
    const numberOfPayments = 36; // 3 years * 12 months
    const payment = (loanAmount * rate * Math.pow(1 + rate, numberOfPayments)) / (Math.pow(1 + rate, numberOfPayments) - 1);
    setMonthlyPayment(payment);
  }, [loanAmount]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = Number(e.target.value);
    setLoanAmount(newAmount);
  };

  return (
    <div className="bg-green-50 p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">3 Year Loan (3.217% per month)</h2>
      <input
        type="range"
        min="1000"
        max="20000"
        step="100"
        value={loanAmount}
        onChange={handleSliderChange}
        className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer mb-4"
      />
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>$1,000</span>
        <span>$20,000</span>
      </div>
      <p className="text-2xl font-bold text-gray-800 mt-4">
        ${monthlyPayment.toFixed(2)}<span className="text-sm font-normal text-gray-600">/month</span>
      </p>
    </div>
  );
};

export default LoanCalculator;