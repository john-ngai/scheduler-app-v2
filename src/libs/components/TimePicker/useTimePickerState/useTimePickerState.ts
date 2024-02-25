/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */
/** */

import { SelectChangeEvent } from '@mui/material'
import { useCallback, useState } from 'react'
import { TimePickerState } from './types'
import { useOptionsState } from './useOptionsState'

export const useTimePickerState = (): TimePickerState => {
  const [startTime, setStartTime] = useState<string>('')
  const [endTime, setEndTime] = useState<string>('')

  const { startOptions, endOptions } = useOptionsState()

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
