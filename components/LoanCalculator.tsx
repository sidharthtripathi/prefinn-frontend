"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { formatCurrency } from "@/lib/utils";

const LoanCalculator = () => {
  // Initial state values
  const [loanAmount, setLoanAmount] = useState(500000); // ₹5,00,000
  const [interestRate, setInterestRate] = useState(11.25); // 11.25%
  const [tenure, setTenure] = useState(24); // 2 years in months
  
  // Calculated values
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  // Calculate EMI, total interest and total payable amount
  useEffect(() => {
    // Convert annual interest rate to monthly rate
    const monthlyRate = interestRate / 100 / 12;
    
    // EMI calculation formula: P × r × (1 + r)^n / ((1 + r)^n - 1)
    // Where P = Principal, r = monthly rate, n = number of months
    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure) / (Math.pow(1 + monthlyRate, tenure) - 1);
    
    const calculatedEMI = isFinite(emi) ? emi : 0;
    const calculatedTotalPayable = calculatedEMI * tenure;
    const calculatedTotalInterest = calculatedTotalPayable - loanAmount;
    
    setMonthlyEMI(calculatedEMI);
    setTotalInterest(calculatedTotalInterest);
    setTotalPayable(calculatedTotalPayable);
  }, [loanAmount, interestRate, tenure]);

  // Format tenure display (convert months to years and months)
  const formatTenure = (months: number) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) {
      return `${remainingMonths}M`;
    } else if (remainingMonths === 0) {
      return `${years}Y`;
    } else {
      return `${years}Y ${remainingMonths}M`;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Loan Calculator Card */}
      <Card className="flex-1 p-6 bg-white shadow-sm">
        <CardTitle className="text-3xl font-bold text-yellow-400 mb-6">Loan Calculator</CardTitle>
        <CardContent className="p-0 space-y-6">
          {/* Loan Amount Slider */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">Loan Amount</span>
              <span className="text-lg font-semibold">₹{formatCurrency(loanAmount)}</span>
            </div>
            <Slider
              value={[loanAmount]}
              min={30000}
              max={5000000}
              step={10000}
              onValueChange={(value) => setLoanAmount(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>₹30K</span>
              <span>₹5L</span>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">Interest Rate</span>
              <span className="text-lg font-semibold">{interestRate.toFixed(2)}%</span>
            </div>
            <Slider
              value={[interestRate]}
              min={10}
              max={24}
              step={0.25}
              onValueChange={(value) => setInterestRate(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>10%</span>
              <span>24%</span>
            </div>
          </div>

          {/* Repayment Tenure Slider */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">Repayment Tenure</span>
              <span className="text-lg font-semibold">{formatTenure(tenure)}</span>
            </div>
            <Slider
              value={[tenure]}
              min={12}
              max={60}
              step={3}
              onValueChange={(value) => setTenure(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>1 Year</span>
              <span>5 Years</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Summary Card */}
      <Card className="flex-1 p-6 bg-white shadow-sm">
        <CardTitle className="text-3xl font-bold text-gray-800 mb-6">Payment Summary</CardTitle>
        <CardContent className="p-0">
          <div className="space-y-4 mb-8">
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Principal Amount</span>
              <span className="text-lg font-medium">₹{formatCurrency(loanAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Total Interest</span>
              <span className="text-lg font-medium">₹{formatCurrency(totalInterest)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Total Payable</span>
              <span className="text-lg font-medium">₹{formatCurrency(totalPayable)}</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="text-yellow-400 text-5xl font-bold">
              ₹{formatCurrency(monthlyEMI)}
            </div>
            <div className="text-gray-600 mt-2">Monthly EMI</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoanCalculator;