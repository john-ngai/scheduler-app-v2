/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { useEffect } from 'react'
import { TimeSlot } from '../../../types/public'

interface Args {
  allTimeSlots: TimeSlot[]
  startTimeSlot: TimeSlot
  endTimeSlot: TimeSlot
  setStartTime: React.Dispatch<React.SetStateAction<TimeSlot>>
  setEndTime: React.Dispatch<React.SetStateAction<TimeSlot>>
}

/**
 * Automatically adjust the end time slot so that it's never
 * less than the start time slot.
 */
export const useValidatedTimeSlotState = ({
  allTimeSlots,
  startTimeSlot,
  endTimeSlot,
  setStartTime,
  setEndTime,
}: Args): void => {
  const timeSlotLabels = allTimeSlots.map(({ label }) => label)
  const { label: startTimeSlotLabel } = startTimeSlot
  const { label: endTimeSlotLabel } = endTimeSlot

  const startIndex = timeSlotLabels.indexOf(startTimeSlotLabel)
  const endIndex = timeSlotLabels.indexOf(endTimeSlotLabel)

  useEffect(() => {
    if (startIndex >= endIndex) {
      const nextIndex = startIndex + 1
      setEndTime(allTimeSlots[nextIndex])
    } else if (endIndex <= startIndex) {
      const previousIndex = endIndex - 1
      setStartTime(allTimeSlots[previousIndex])
    }
  }, [startIndex, endIndex, setEndTime, setStartTime, allTimeSlots])
}
