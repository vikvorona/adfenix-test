export enum City {
  STO = 'Stockholm',
  GOT = 'Gothenburg',
}

export enum Occupation {
  PROGRAMMER = 'Programmer',
  TEACHER = 'Teacher',
  CASHIER = 'Cashier',
}

export enum IncomeYear {
  XX = '2020',
  XIX = '2019',
}

export interface CalculationInfo {
  yearsOfExperience: number;
  occupation: Occupation;
  city: City;
  incomeYear: IncomeYear;
}
