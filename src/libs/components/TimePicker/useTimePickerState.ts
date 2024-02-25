/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */
/** */

import { SelectChangeEvent } from '@mui/material'
import { useCallback, useState } from 'react'
import { timeSlots } from './constants'

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

interface TimePickerState {
  startTime: string
  endTime: string
  startOptions: string[]
  endOptions: string[]
  onChangeStartTime: (event: SelectChangeEvent) => void
  onChangeEndTime: (event: SelectChangeEvent) => void
}

export const useTimePickerState = (): TimePickerState => {
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

  return {
    startTime,
    endTime,
    startOptions,
    endOptions,
    onChangeStartTime,
    onChangeEndTime,
  }
}
