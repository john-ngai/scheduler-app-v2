/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { Box, Paper, type SxProps, type Theme } from '@mui/material'
import React from 'react'

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
  },
}

export const App: React.FC = () => (
  <Box sx={styles.box}>
    <Paper sx={styles.paper} elevation={4}>
      Hello world
    </Paper>
  </Box>
)
