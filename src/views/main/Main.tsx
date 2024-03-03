/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { Box, Paper, SxProps, Theme } from '@mui/material'
import React, { useState } from 'react'
import {
  DatePicker,
  DatePickerElements,
  TimePicker,
  initialDatePickerElements,
} from '../../libs/components'
import { allTimeSlots } from './constants'
import { useTimePickerProps } from './useTimePickerProps'

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

  const [dateElements, setDateElements] = useState<DatePickerElements>(
    initialDatePickerElements
  )

  const { selectedTimeSlots, setSelectedTimeSlots } = useTimePickerProps({
    allTimeSlots,
  })

  return (
    <main>
      <Box sx={box}>
        <Paper sx={paper} elevation={3}>
          <DatePicker
            dateElements={dateElements}
            setDateElements={setDateElements}
          />
          <TimePicker
            allTimeSlots={allTimeSlots}
            selectedTimeSlots={selectedTimeSlots}
            setSelectedTimeSlots={setSelectedTimeSlots}
          />
        </Paper>
      </Box>
    </main>
  )
}
