/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { useCallback } from 'react'
import { TimePickerProps, TimeSlot } from '../../types/public'
import { TimePickerState } from '../types'
import {
  useFunctions,
  useTimeSlots,
  useValidatedTimeSlotState,
} from './internals'

export const useTimePickerState = ({
  allTimeSlots,
  selectedTimeSlots,
  setSelectedTimeSlots,
}: TimePickerProps): TimePickerState => {
  const { start: startTimeSlot, end: endTimeSlot } = selectedTimeSlots

  const setStartTime = useCallback(
    (timeSlot: TimeSlot) =>
      setSelectedTimeSlots((prev) => ({
        ...prev,
        start: timeSlot,
      })),
    [setSelectedTimeSlots]
  )

  const setEndTime = useCallback(
    (timeSlot: TimeSlot) =>
      setSelectedTimeSlots((prev) => ({
        ...prev,
        end: timeSlot,
      })),
    [setSelectedTimeSlots]
  )

  useValidatedTimeSlotState({
    allTimeSlots,
    startTimeSlot,
    endTimeSlot,
    setStartTime,
    setEndTime,
  })

  const { startTimeSlots, endTimeSlots } = useTimeSlots({ allTimeSlots })

  const { onChangeStartTime, onChangeEndTime } = useFunctions({
    allTimeSlots,
    setStartTime,
    setEndTime,
  })

  return {
    startTimeSlot,
    endTimeSlot,
    startTimeSlots,
    endTimeSlots,
    onChangeStartTime,
    onChangeEndTime,
  }
}
