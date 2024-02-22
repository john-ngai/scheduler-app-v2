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
import React, { PropsWithChildren, useCallback, useState } from 'react'

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
}

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  const { box, paper } = styles
  return (
    <Box sx={box}>
      <Paper sx={paper} elevation={4}>
        {children}
      </Paper>
    </Box>
  )
}
