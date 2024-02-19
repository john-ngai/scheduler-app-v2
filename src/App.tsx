/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  type SelectChangeEvent,
  type SxProps,
  type Theme,
} from '@mui/material'
import React, { useCallback, useState } from 'react'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

interface FormValues {
  month: string
}

const styles: Record<string, SxProps<Theme>> = {
  box: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    width: '50vw',
    height: '50vh',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: {
    width: 200,
    marginTop: 5,
  },
}

export const App: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    month: 'January',
  })

  const onChangeMonth = useCallback(
    (event: SelectChangeEvent) =>
      setFormValues((prev) => ({ ...prev, month: event.target.value })),
    []
  )

  return (
    <Box sx={styles.box}>
      <Paper sx={styles.paper} elevation={4}>
        <FormControl sx={styles.formControl}>
          <InputLabel id="select-month">Month</InputLabel>
          <Select
            labelId="select-month"
            value={formValues.month}
            label="month"
            onChange={onChangeMonth}
          >
            {months.map((month, index) => (
              <MenuItem key={index} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
    </Box>
  )
}
