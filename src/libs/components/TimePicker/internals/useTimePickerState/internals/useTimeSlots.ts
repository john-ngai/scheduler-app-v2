/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { useState } from 'react'
import { TimeSlot } from '../../../types/public'
import { TimePickerState } from '../../types'

const getInitialStartTimeSlots = (allTimeSlots: TimeSlot[]): TimeSlot[] => {
  const labels = allTimeSlots.map(({ label }) => label)
  const lastIndex = labels.indexOf('4:00 PM')
  const filteredOptions = allTimeSlots.slice(0, lastIndex + 1)
  return filteredOptions
}

const getInitialEndTimeSlots = (allTimeSlots: TimeSlot[]): TimeSlot[] => {
  const labels = allTimeSlots.map(({ label }) => label)
  const startIndex = labels.indexOf('9:30 AM')
  const filteredOptions = allTimeSlots.slice(startIndex)
  return filteredOptions
}

interface UseTimeSlotArgs {
  allTimeSlots: TimeSlot[]
}

type TimeSlots = Pick<TimePickerState, 'startTimeSlots' | 'endTimeSlots'>

export const useTimeSlots = ({ allTimeSlots }: UseTimeSlotArgs): TimeSlots => {
  const [startTimeSlots] = useState<TimeSlot[]>(
    getInitialStartTimeSlots(allTimeSlots)
  )

  const [endTimeSlots] = useState<TimeSlot[]>(
    getInitialEndTimeSlots(allTimeSlots)
  )

  return { startTimeSlots, endTimeSlots }
}
