/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { SelectChangeEvent } from '@mui/material'
import { useCallback } from 'react'
import { TimeSlot } from '../../types'

const getTimeSlotByLabel = (timeSlots: TimeSlot[], label: string): TimeSlot =>
  timeSlots.find((timeSlot) => timeSlot.label === label)

interface Args {
  timeSlots: TimeSlot[]
  setStartTime: React.Dispatch<React.SetStateAction<TimeSlot>>
  setEndTime: React.Dispatch<React.SetStateAction<TimeSlot>>
}

interface Functions {
  onChangeStartTime: (event: SelectChangeEvent) => void
  onChangeEndTime: (event: SelectChangeEvent) => void
}

export const useFunctions = ({
  timeSlots,
  setStartTime,
  setEndTime,
}: Args): Functions => {
  const onChangeStartTime = useCallback(
    (event: SelectChangeEvent) => {
      const label = event.target.value
      const timeSlot = getTimeSlotByLabel(timeSlots, label)
      setStartTime(timeSlot)
    },
    [timeSlots, setStartTime]
  )

  const onChangeEndTime = useCallback(
    (event: SelectChangeEvent) => {
      const label = event.target.value
      const timeSlot = getTimeSlotByLabel(timeSlots, label)
      setEndTime(timeSlot)
    },
    [timeSlots, setEndTime]
  )

  return { onChangeStartTime, onChangeEndTime }
}
