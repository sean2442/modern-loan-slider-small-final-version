import React, { useState, useEffect } from 'react';
import { DollarSign } from 'lucide-react';

interface LoanInputProps {
  loanAmount: number;
  setLoanAmount: (amount: number) => void;
  onCalculate: () => void;
}

const LoanInput: React.FC<LoanInputProps> = ({ loanAmount, setLoanAmount, onCalculate }) => {
  const [inputValue, setInputValue] = useState(loanAmount.toString());

  useEffect(() => {
    setInputValue(loanAmount.toString());
  }, [loanAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    const numValue = Number(value);
    if (!isNaN(numValue) && numValue >= 1000 && numValue <= 20000) {
      setLoanAmount(numValue);
    }
  };

  const handleBlur = () => {
    const numValue = Number(inputValue);
    if (isNaN(numValue) || numValue < 1000 || numValue > 20000) {
      setInputValue(loanAmount.toString());
    } else {
      setLoanAmount(numValue);
    }
  };

  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
        Loan Amount
      </label>
      <div className="flex items-center">
        <div className="relative flex-grow mr-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="loanAmount"
            id="loanAmount"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>
        <button
          onClick={onCalculate}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default LoanInput;