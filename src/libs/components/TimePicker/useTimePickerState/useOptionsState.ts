/* Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { useState } from 'react'
import { timeSlots } from './constants'
import { TimePickerState, TimeSlot } from './types'

const getInitialStartOptions = (): TimeSlot[] => {
  const labels = timeSlots.map(({ label }) => label)
  const lastIndex = labels.indexOf('4:00 PM')
  const filteredOptions = timeSlots.slice(0, lastIndex + 1)
  return filteredOptions
}

const getInitialEndOptions = (): TimeSlot[] => {
  const labels = timeSlots.map(({ label }) => label)
  const startIndex = labels.indexOf('9:30 AM')
  const filteredOptions = timeSlots.slice(startIndex)
  return filteredOptions
}

type OptionsState = Pick<TimePickerState, 'startOptions' | 'endOptions'>

export const useOptionsState = (): OptionsState => {
  const [startOptions, setStartOptions] = useState<TimeSlot[]>(
    getInitialStartOptions()
  )

  const [endOptions, setEndOptions] = useState<TimeSlot[]>(
    getInitialEndOptions()
  )

  return { startOptions, endOptions }
}
