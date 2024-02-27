/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { SelectChangeEvent } from '@mui/material'

export interface TimeSlot {
  label: string
  hours: number
  minutes: number
}

export interface TimePickerState {
  startTimeSlot: TimeSlot
  endTimeSlot: TimeSlot
  startTimeSlots: TimeSlot[]
  endTimeSlots: TimeSlot[]
  onChangeStartTime: (event: SelectChangeEvent) => void
  onChangeEndTime: (event: SelectChangeEvent) => void
}
