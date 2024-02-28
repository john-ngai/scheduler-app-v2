/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

export interface TimeSlot {
  label: string
  hours: number
  minutes: number
}

export interface TimePickerProps {
  allTimeSlots: TimeSlot[]
  startTimeSlot: TimeSlot
  endTimeSlot: TimeSlot
  setStartTimeSlot: React.Dispatch<React.SetStateAction<TimeSlot>>
  setEndTimeSlot: React.Dispatch<React.SetStateAction<TimeSlot>>
}
