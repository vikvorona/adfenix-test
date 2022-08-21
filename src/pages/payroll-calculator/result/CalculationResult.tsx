import { Typography } from '@mui/material';
import * as React from 'react';

interface Props {
  salary: number;
}

const amountFormatter = new Intl.NumberFormat('sv-SE', {
  style: 'currency',
  currency: 'SEK',
  minimumFractionDigits: 0,
});

function CalculationResult({ salary }: Props) {
  const formattedSalary = React.useMemo(() => amountFormatter.format(salary), [salary]);

  return (
    <Typography>
      Your salary after tax: <b>{formattedSalary}</b>
    </Typography>
  );
}

export default CalculationResult;
