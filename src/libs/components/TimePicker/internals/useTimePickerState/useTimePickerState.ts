/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { useState } from 'react'
import { TimeSlot } from '../../types/public'
import { TimePickerState } from '../types'
import {
  timeSlots,
  useFunctions,
  useTimeSlots,
  useValidatedTimeSlotState,
} from './internals'

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

const initialStartTime = getTimeSlotByValues({
  timeSlots,
  hours: 9,
  minutes: 0,
})

const initialEndTime = getTimeSlotByValues({ timeSlots, hours: 9, minutes: 30 })

export const useTimePickerState = (): TimePickerState => {
  const [startTimeSlot, setStartTime] = useState<TimeSlot>(initialStartTime)
  const [endTimeSlot, setEndTime] = useState<TimeSlot>(initialEndTime)

  useValidatedTimeSlotState({
    timeSlots,
    startTimeSlot,
    endTimeSlot,
    setStartTime,
    setEndTime,
  })

  const { startTimeSlots, endTimeSlots } = useTimeSlots()

  const { onChangeStartTime, onChangeEndTime } = useFunctions({
    timeSlots,
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
