/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { SelectChangeEvent } from '@mui/material'
import { useCallback } from 'react'
import { TimeSlot } from '../../../types/public'

const getTimeSlotByLabel = (
  allTimeSlots: TimeSlot[],
  label: string
): TimeSlot => allTimeSlots.find((timeSlot) => timeSlot.label === label)

interface Args {
  allTimeSlots: TimeSlot[]
  setStartTime: (timeSlot: TimeSlot) => void
  setEndTime: (timeSlot: TimeSlot) => void
}

interface Functions {
  onChangeStartTime: (event: SelectChangeEvent) => void
  onChangeEndTime: (event: SelectChangeEvent) => void
}

export const useFunctions = ({
  allTimeSlots,
  setStartTime,
  setEndTime,
}: Args): Functions => {
  const onChangeStartTime = useCallback(
    (event: SelectChangeEvent) => {
      const label = event.target.value
      const timeSlot = getTimeSlotByLabel(allTimeSlots, label)
      setStartTime(timeSlot)
    },
    [allTimeSlots, setStartTime]
  )

  const onChangeEndTime = useCallback(
    (event: SelectChangeEvent) => {
      const label = event.target.value
      const timeSlot = getTimeSlotByLabel(allTimeSlots, label)
      setEndTime(timeSlot)
    },
    [allTimeSlots, setEndTime]
  )

  return { onChangeStartTime, onChangeEndTime }
}
