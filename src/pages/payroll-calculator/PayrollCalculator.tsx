import { Box, Card, Container, Divider, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { CalculationInfo } from '../../types';
import calculateSalaryAfterTaxes from '../../utils/tax-calculations';
import CalculatorForm from './form/CalculatorForm';
import CalculationResult from './result/CalculationResult';

function PayrollCalculator() {
  const [salary, setSalary] = useState<number | null>(null);
  const mobile = useMediaQuery('(max-width:450px)');

  const onSubmit = ({ occupation, yearsOfExperience, city, incomeYear }: CalculationInfo) => {
    setSalary(calculateSalaryAfterTaxes(occupation, yearsOfExperience, city, incomeYear));
  };

  return (
    <Container sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card variant="outlined" sx={{ maxWidth: 500, flex: 1, p: mobile ? 2 : 6 }}>
        <Typography variant={mobile ? 'h5' : 'h4'} textAlign="center" component="h1">
          Payroll Calculator
        </Typography>
        <Divider sx={mobile ? { mt: 1, mb: 2 } : { mt: 2, mb: 3 }} />
        <CalculatorForm onSubmit={onSubmit} />
        <Box sx={{ pt: 2, height: 40 }}>{salary && <CalculationResult salary={salary} />}</Box>
      </Card>
    </Container>
  );
}

export default PayrollCalculator;
