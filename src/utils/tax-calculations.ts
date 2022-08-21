import { City, IncomeYear, Occupation } from '../types';

const getSalaryByOccupation = (occupation: Occupation) => {
  switch (occupation) {
    case Occupation.PROGRAMMER:
      return 30000;
    case Occupation.TEACHER:
      return 27000;
    case Occupation.CASHIER:
      return 25000;
    default:
      throw Error(`Unknown occupation: ${occupation}`);
  }
};

const getIncreaseByExperience = (years: number) => {
  if (years < 4) return 1;
  if (years < 8) return 1.2;
  if (years < 11) return 1.4;
  return 1.6;
};

const getBasicTaxRateByCityAndYear = (city: City, year: IncomeYear) => {
  if (!Object.values(IncomeYear).includes(year)) throw new Error(`Income year ${year} is not supported`);

  switch (city) {
    case City.STO:
      if (year === IncomeYear.XIX) return 0.7;
      if (year === IncomeYear.XX) return 0.71;
      throw new Error();
    case City.GOT:
      if (year === IncomeYear.XIX) return 0.75;
      if (year === IncomeYear.XX) return 0.78;
      throw new Error();
    default:
      throw new Error(`Unknown city: ${city}`);
  }
};

const calculateSalaryAfterTaxes = (
  occupation: Occupation,
  yearsOfExperience: number,
  city: City,
  incomeYear: IncomeYear,
) => {
  const basicSalary = getSalaryByOccupation(occupation) * getIncreaseByExperience(yearsOfExperience);
  const basicTax = getBasicTaxRateByCityAndYear(city, incomeYear);
  if (basicSalary <= 36000) return basicSalary * basicTax;
  if (basicSalary <= 45000) return 36000 * basicTax + (basicSalary - 36000) * 0.5;
  return 36000 * basicTax + 9000 * 0.5 + (basicSalary - 45000) * 0.3;
};

export default calculateSalaryAfterTaxes;
