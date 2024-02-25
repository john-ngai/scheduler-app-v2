/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */
/** */

import { Box, Paper, SxProps, Theme } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import { DatePicker, TimePicker } from '../libs/components'

const styles: Record<string, SxProps<Theme>> = {
  box: {
    height: '100vh',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    width: '50vw',
    height: '50vh',
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
}

export const Main: React.FC = () => {
  const { box, paper } = styles
  return (
    <main>
      <Box sx={box}>
        <Paper sx={paper} elevation={3}>
          <DatePicker />
          <TimePicker />
        </Paper>
      </Box>
    </main>
  )
}
