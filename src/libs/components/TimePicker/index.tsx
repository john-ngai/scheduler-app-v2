/* Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { Box, SxProps, Theme } from '@mui/material'
import React from 'react'
import { EndTimePicker, StartTimePicker } from './time-pickers'
import { useTimePickerState } from './useTimePickerState'

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
    startTime,
    endTime,
    startOptions,
    endOptions,
    onChangeStartTime,
    onChangeEndTime,
  } = useTimePickerState()

  return (
    <Box sx={styles.box}>
      <StartTimePicker
        selectedTimeSlot={startTime}
        allTimeSlots={startOptions}
        onChange={onChangeStartTime}
      />
      <EndTimePicker
        selectedTimeSlot={endTime}
        allTimeSlots={endOptions}
        onChange={onChangeEndTime}
      />
    </Box>
  )
}
