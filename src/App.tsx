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
  const [value, setValue] = useState<string>('')

  const onChange = useCallback(
    (event: SelectChangeEvent) => setValue(event.target.value),
    []
  )

  return (
    <Box sx={styles.box}>
      <Paper sx={styles.paper} elevation={4}>
        <FormControl sx={styles.formControl}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Age"
            onChange={onChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </Box>
  )
}
