/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { Box, SelectChangeEvent, SxProps, Theme } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { EndTimePicker, StartTimePicker } from './time-pickers'

const styles: Record<string, SxProps<Theme>> = {
  box: {
    width: 262,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
}

const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
]

export const TimePicker: React.FC = () => {
  const [startTime, setStartTime] = useState<string>(null)
  const [endTime, setEndTime] = useState<string>(null)

  const onChangeStartTime = useCallback(
    (event: SelectChangeEvent) => setStartTime(event.target.value),
    []
  )

  const onChangeEndTime = useCallback(
    (event: SelectChangeEvent) => setEndTime(event.target.value),
    []
  )

  return (
    <Box sx={styles.box}>
      <StartTimePicker
        value={startTime}
        options={timeSlots}
        onChange={onChangeStartTime}
      />
      <EndTimePicker
        value={endTime}
        options={timeSlots}
        onChange={onChangeEndTime}
      />
    </Box>
  )
}
