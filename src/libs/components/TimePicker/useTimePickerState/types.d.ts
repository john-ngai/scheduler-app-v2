/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */
/** */

export interface TimePickerState {
  startTime: string
  endTime: string
  startOptions: string[]
  endOptions: string[]
  onChangeStartTime: (event: SelectChangeEvent) => void
  onChangeEndTime: (event: SelectChangeEvent) => void
}
