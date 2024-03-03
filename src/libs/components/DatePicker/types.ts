/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

export interface DatePickerElements {
  year: number
  monthIndex: number
  day: number
}

export interface DatePickerProps {
  dateElements: DatePickerElements
  setDateElements: React.Dispatch<React.SetStateAction<DatePickerElements>>
}
