import React from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { CalculationInfo, City, IncomeYear, Occupation } from '../../../types';

const validationSchema = yup.object({
  yearsOfExperience: yup.number().min(0, 'Please enter a positive number').required('Please enter your experience'),
  occupation: yup.mixed<Occupation>().oneOf(Object.values(Occupation)).required('Please enter your occupation'),
  city: yup.mixed<City>().oneOf(Object.values(City)).required('Please enter the city'),
  incomeYear: yup.mixed<IncomeYear>().oneOf(Object.values(IncomeYear)).required('Please enter the income year'),
});

interface Props {
  onSubmit: (values: CalculationInfo) => void;
}

interface FormikForm {
  yearsOfExperience: string;
  occupation: string;
  city: string;
  incomeYear: string;
}

function CalculatorForm({ onSubmit }: Props) {
  const formik = useFormik<FormikForm>({
    initialValues: {
      yearsOfExperience: '',
      occupation: '',
      city: '',
      incomeYear: '',
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit({
        yearsOfExperience: +values.yearsOfExperience,
        occupation: values.occupation as Occupation,
        city: values.city as City,
        incomeYear: values.incomeYear as IncomeYear,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <TextField
          id="yearsOfExperience"
          name="yearsOfExperience"
          label="Years Of Experience"
          type="number"
          value={formik.values.yearsOfExperience}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.yearsOfExperience && Boolean(formik.errors.yearsOfExperience)}
          helperText={formik.touched.yearsOfExperience && formik.errors.yearsOfExperience}
        />
        <FormControl error={formik.touched.occupation && Boolean(formik.errors.occupation)}>
          <InputLabel>Occupation</InputLabel>
          <Select
            id="occupation"
            name="occupation"
            label="Occupation"
            value={formik.values.occupation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {Object.values(Occupation).map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.occupation && (
            <FormHelperText id="occupation-helper-text">{formik.errors.occupation}</FormHelperText>
          )}
        </FormControl>
        <FormControl error={formik.touched.city && Boolean(formik.errors.city)}>
          <InputLabel>City</InputLabel>
          <Select
            id="city"
            name="city"
            label="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {Object.values(City).map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.city && <FormHelperText id="city-helper-text">{formik.errors.city}</FormHelperText>}
        </FormControl>
        <FormControl error={formik.touched.incomeYear && Boolean(formik.errors.incomeYear)}>
          <InputLabel>Income Year</InputLabel>
          <Select
            id="incomeYear"
            name="incomeYear"
            label="Income Year"
            value={formik.values.incomeYear}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {Object.values(IncomeYear).map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.incomeYear && (
            <FormHelperText id="incomeYear-helper-text">{formik.errors.incomeYear}</FormHelperText>
          )}
        </FormControl>
        <Button type="submit" variant="contained">
          Calculate
        </Button>
      </Stack>
    </form>
  );
}

export default CalculatorForm;
