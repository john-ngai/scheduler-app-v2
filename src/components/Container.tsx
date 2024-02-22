/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { Box, Paper, SxProps, Theme } from '@mui/material'
import React, { PropsWithChildren } from 'react'

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
  },
}

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  const { box, paper } = styles
  return (
    <Box sx={box}>
      <Paper sx={paper} elevation={3}>
        {children}
      </Paper>
    </Box>
  )
}
