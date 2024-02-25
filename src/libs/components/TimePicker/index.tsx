/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */
/** */

import { Box, SelectChangeEvent, SxProps, Theme } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { timeSlots } from './constants'
import { EndTimePicker, StartTimePicker } from './time-pickers'

const styles: Record<string, SxProps<Theme>> = {
  box: {
    width: 262,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
}

const getInitialStartOptions = (): string[] => {
  const options = timeSlots.map(({ label }) => label)
  const lastIndex = options.indexOf('4:00 PM')
  const filteredOptions = options.slice(0, lastIndex + 1)
  return filteredOptions
}

const getInitialEndOptions = (): string[] => {
  const options = timeSlots.map(({ label }) => label)
  const startIndex = options.indexOf('9:30 AM')
  const filteredOptions = options.slice(startIndex)
  return filteredOptions
}

export const TimePicker: React.FC = () => {
  const [startTime, setStartTime] = useState<string>('')
  const [endTime, setEndTime] = useState<string>('')

  const [startOptions, setStartOptions] = useState<string[]>(
    getInitialStartOptions()
  )
  const [endOptions, setEndOptions] = useState<string[]>(getInitialEndOptions())

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
        options={startOptions}
        onChange={onChangeStartTime}
      />
      <EndTimePicker
        value={endTime}
        options={endOptions}
        onChange={onChangeEndTime}
      />
    </Box>
  )
}
