/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */
/** */

import { useState } from 'react'
import { timeSlots } from './constants'
import { TimePickerState } from './types'

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

type OptionsState = Pick<TimePickerState, 'startOptions' | 'endOptions'>

export const useOptionsState = (): OptionsState => {
  const [startOptions, setStartOptions] = useState<string[]>(
    getInitialStartOptions()
  )

  const [endOptions, setEndOptions] = useState<string[]>(getInitialEndOptions())

  return { startOptions, endOptions }
}
