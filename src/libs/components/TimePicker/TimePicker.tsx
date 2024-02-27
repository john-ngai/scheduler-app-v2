/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { Box, SxProps, Theme } from '@mui/material'
import React from 'react'
import { EndTimePicker, StartTimePicker, useTimePickerState } from './internals'

const styles: Record<string, SxProps<Theme>> = {
  box: {
    width: 262,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
}

export const TimePicker: React.FC = () => {
  const {
    startTimeSlot,
    endTimeSlot,
    startTimeSlots,
    endTimeSlots,
    onChangeStartTime,
    onChangeEndTime,
  } = useTimePickerState()

  return (
    <Box sx={styles.box}>
      <StartTimePicker
        selectedTimeSlot={startTimeSlot}
        allTimeSlots={startTimeSlots}
        onChange={onChangeStartTime}
      />
      <EndTimePicker
        selectedTimeSlot={endTimeSlot}
        allTimeSlots={endTimeSlots}
        onChange={onChangeEndTime}
      />
    </Box>
  )
}
