/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { useMemo, useState } from 'react'
import { TimeSlot } from '../../types/public'
import { TimePickerState } from '../types'
import {
  useFunctions,
  useTimeSlots,
  useValidatedTimeSlotState,
} from './internals'

interface GetTimeSlotByValuesArgs {
  allTimeSlots: TimeSlot[]
  hours: number
  minutes: number
}

const getTimeSlotByValues = ({
  allTimeSlots,
  hours,
  minutes,
}: GetTimeSlotByValuesArgs): TimeSlot => {
  const filteredTimeSlots = allTimeSlots.filter(
    (timeSlot) => timeSlot.hours === hours
  )
  return filteredTimeSlots.find((timeSlot) => timeSlot.minutes === minutes)
}

interface UseTimePickerStateArgs {
  allTimeSlots: TimeSlot[]
}

export const useTimePickerState = ({
  allTimeSlots,
}: UseTimePickerStateArgs): TimePickerState => {
  const initialStartTime = useMemo(
    () =>
      getTimeSlotByValues({
        allTimeSlots,
        hours: 9,
        minutes: 0,
      }),
    [allTimeSlots]
  )

  const initialEndTime = useMemo(
    () =>
      getTimeSlotByValues({
        allTimeSlots,
        hours: 9,
        minutes: 30,
      }),
    [allTimeSlots]
  )

  const [startTimeSlot, setStartTime] = useState<TimeSlot>(initialStartTime)
  const [endTimeSlot, setEndTime] = useState<TimeSlot>(initialEndTime)

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
