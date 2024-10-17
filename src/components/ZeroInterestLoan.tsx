import React from 'react';

interface ZeroInterestLoanProps {
  loanAmount: number;
}

const ZeroInterestLoan: React.FC<ZeroInterestLoanProps> = ({ loanAmount }) => {
  const monthlyPayment = loanAmount / 12;

  return (
    <div className="bg-purple-50 p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">12 Month Loan (0% interest)</h2>
      <p className="text-2xl font-bold text-gray-800">
        ${monthlyPayment.toFixed(2)}<span className="text-sm font-normal text-gray-600">/month</span>
      </p>
    </div>
  );
};

export default ZeroInterestLoan;