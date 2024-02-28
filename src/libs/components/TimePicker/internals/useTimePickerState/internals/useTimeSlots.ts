/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { useState } from 'react'
import { TimeSlot } from '../../../types/public'
import { TimePickerState } from '../../types'
import { timeSlots } from './constants'

const getInitialStartTimeSlots = (): TimeSlot[] => {
  const labels = timeSlots.map(({ label }) => label)
  const lastIndex = labels.indexOf('4:00 PM')
  const filteredOptions = timeSlots.slice(0, lastIndex + 1)
  return filteredOptions
}

const getInitialEndTimeSlots = (): TimeSlot[] => {
  const labels = timeSlots.map(({ label }) => label)
  const startIndex = labels.indexOf('9:30 AM')
  const filteredOptions = timeSlots.slice(startIndex)
  return filteredOptions
}

type TimeSlots = Pick<TimePickerState, 'startTimeSlots' | 'endTimeSlots'>

export const useTimeSlots = (): TimeSlots => {
  const [startTimeSlots, setStartOptions] = useState<TimeSlot[]>(
    getInitialStartTimeSlots()
  )

  const [endTimeSlots, setEndOptions] = useState<TimeSlot[]>(
    getInitialEndTimeSlots()
  )

  return { startTimeSlots, endTimeSlots }
}
