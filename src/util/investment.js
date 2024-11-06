// This function expects a JS object as an argument
// The object should contain the following properties
// - initialinvestment: The initial investment amount
// - annualinvestment: The amount invested every year
// - expectedreturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialinvestment,
  annualinvestment,
  expectedreturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialinvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedreturn / 100);
    investmentValue += interestEarnedInYear + annualinvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualinvestment: annualinvestment, // investment added in this year
    });
  }
  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
