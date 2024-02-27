/* Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { SelectChangeEvent } from '@mui/material'
import { useCallback, useState } from 'react'
import { timeSlots } from './constants'
import { TimePickerState, TimeSlot } from './types'
import { useOptionsState } from './useOptionsState'

interface GetTimeSlotByValuesArgs {
  timeSlots: TimeSlot[]
  hours: number
  minutes: number
}

const getTimeSlotByValues = ({
  timeSlots,
  hours,
  minutes,
}: GetTimeSlotByValuesArgs): TimeSlot => {
  const filteredTimeSlots = timeSlots.filter(
    (timeSlot) => timeSlot.hours === hours
  )
  return filteredTimeSlots.find((timeSlot) => timeSlot.minutes === minutes)
}

const getTimeSlotByLabel = (timeSlots: TimeSlot[], label: string): TimeSlot =>
  timeSlots.find((timeSlot) => timeSlot.label === label)

const initialStartTime = getTimeSlotByValues({
  timeSlots,
  hours: 9,
  minutes: 0,
})
const initialEndTime = getTimeSlotByValues({ timeSlots, hours: 9, minutes: 30 })

export const useTimePickerState = (): TimePickerState => {
  const [startTimeSlot, setStartTime] = useState<TimeSlot>(initialStartTime)
  const [endTimeSlot, setEndTime] = useState<TimeSlot>(initialEndTime)

  const { startTimeSlots, endTimeSlots } = useOptionsState()

  const onChangeStartTime = useCallback((event: SelectChangeEvent) => {
    const label = event.target.value
    const timeSlot = getTimeSlotByLabel(timeSlots, label)
    setStartTime(timeSlot)
  }, [])

  const onChangeEndTime = useCallback((event: SelectChangeEvent) => {
    const label = event.target.value
    const timeSlot = getTimeSlotByLabel(timeSlots, label)
    setEndTime(timeSlot)
  }, [])

  return {
    startTimeSlot,
    endTimeSlot,
    startTimeSlots,
    endTimeSlots,
    onChangeStartTime,
    onChangeEndTime,
  }
}
