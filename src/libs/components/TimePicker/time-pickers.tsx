/* Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import React, { memo } from 'react'
import { TimeSlot } from './useTimePickerState'

interface TimePickerInternalProps {
  selectedTimeSlot: TimeSlot
  allTimeSlots: TimeSlot[]
  onChange: (event: SelectChangeEvent) => void
}

export const StartTimePicker: React.FC<TimePickerInternalProps> = memo(
  ({ selectedTimeSlot, allTimeSlots, onChange }) => {
    const value = selectedTimeSlot.label
    const options = allTimeSlots.map(({ label }) => label)
    return (
      <FormControl fullWidth>
        <InputLabel id="select-start-time-label">Start Time</InputLabel>
        <Select
          labelId="select-start-time-label"
          id="select-start-time"
          value={value}
          onChange={onChange}
        >
          {options.map((value: string, index: number) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  }
)

export const EndTimePicker: React.FC<TimePickerInternalProps> = memo(
  ({ selectedTimeSlot, allTimeSlots, onChange }) => {
    const value = selectedTimeSlot.label
    const options = allTimeSlots.map(({ label }) => label)
    return (
      <FormControl fullWidth>
        <InputLabel id="select-end-time-label">End Time</InputLabel>
        <Select
          labelId="select-end-time-label"
          id="select-end-time"
          value={value}
          onChange={onChange}
        >
          {options.map((value: string, index: number) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  }
)
