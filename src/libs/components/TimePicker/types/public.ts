/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

export interface TimeSlot {
  label: string
  hours: number
  minutes: number
}

export interface SelectedTimeSlots {
  start: TimeSlot
  end: TimeSlot
}

type SetSelectedTimeSlots = React.Dispatch<
  React.SetStateAction<SelectedTimeSlots>
>

export interface TimePickerProps {
  allTimeSlots: TimeSlot[]
  selectedTimeSlots: SelectedTimeSlots
  setSelectedTimeSlots: SetSelectedTimeSlots
}
