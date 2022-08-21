import { City, IncomeYear, Occupation } from '../types';
import calculateSalaryAfterTaxes from './tax-calculations';

describe('<CalculationResult>', () => {
  it('Programmer/0y/STO/2019', () => {
    const salary = calculateSalaryAfterTaxes(Occupation.PROGRAMMER, 0, City.STO, IncomeYear.XIX);
    expect(salary).to.be.equal(21000);
  });
  it('Programmer/5y/STO/2020', () => {
    const salary = calculateSalaryAfterTaxes(Occupation.PROGRAMMER, 5, City.STO, IncomeYear.XX);
    expect(salary).to.be.equal(25560);
  });
  it('Programmer/8y/GOT/2019', () => {
    const salary = calculateSalaryAfterTaxes(Occupation.PROGRAMMER, 8, City.GOT, IncomeYear.XIX);
    expect(salary).to.be.equal(30000);
  });
  it('Programmer/15y/GOT/2020', () => {
    const salary = calculateSalaryAfterTaxes(Occupation.PROGRAMMER, 15, City.GOT, IncomeYear.XX);
    expect(salary).to.be.equal(33480);
  });
  it('Teacher/1y/GOT/2020', () => {
    const salary = calculateSalaryAfterTaxes(Occupation.TEACHER, 1, City.GOT, IncomeYear.XX);
    expect(salary).to.be.equal(21060);
  });
  it('Teacher/4y/GOT/2019', () => {
    const salary = calculateSalaryAfterTaxes(Occupation.TEACHER, 4, City.GOT, IncomeYear.XIX);
    expect(salary).to.be.equal(24300);
  });
  it('Teacher/9y/STO/2020', () => {
    const salary = calculateSalaryAfterTaxes(Occupation.TEACHER, 9, City.STO, IncomeYear.XX);
    expect(salary).to.be.equal(26460);
  });
  it('Teacher/11y/STO/2019', () => {
    const salary = calculateSalaryAfterTaxes(Occupation.TEACHER, 11, City.STO, IncomeYear.XIX);
    expect(salary).to.be.equal(28800);
  });
  it('Cashier/3y/STO/2020', () => {
    const salary = calculateSalaryAfterTaxes(Occupation.CASHIER, 3, City.STO, IncomeYear.XX);
    expect(salary).to.be.equal(17750);
  });
  it('Cashier/7y/GOT/2020', () => {
    const salary = calculateSalaryAfterTaxes(Occupation.CASHIER, 7, City.GOT, IncomeYear.XX);
    expect(salary).to.be.equal(23400);
  });
  it('Cashier/10y/STO/2019', () => {
    const salary = calculateSalaryAfterTaxes(Occupation.CASHIER, 10, City.STO, IncomeYear.XIX);
    expect(salary).to.be.equal(24500);
  });
  it('Cashier/20y/GOT/2019', () => {
    const salary = calculateSalaryAfterTaxes(Occupation.CASHIER, 20, City.GOT, IncomeYear.XIX);
    expect(salary).to.be.equal(29000);
  });
});
