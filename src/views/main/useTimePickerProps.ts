/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { useMemo, useState } from 'react'
import { SelectedTimeSlots, TimePickerProps } from '../../libs/components'

type Return = Pick<
  TimePickerProps,
  'selectedTimeSlots' | 'setSelectedTimeSlots'
>

type Args = Pick<TimePickerProps, 'allTimeSlots'>

export const useTimePickerProps = ({ allTimeSlots }: Args): Return => {
  const initialState: SelectedTimeSlots = useMemo(
    () => ({
      start: allTimeSlots[0],
      end: allTimeSlots[1],
    }),
    [allTimeSlots]
  )

  const [selectedTimeSlots, setSelectedTimeSlots] =
    useState<SelectedTimeSlots>(initialState)

  return { selectedTimeSlots, setSelectedTimeSlots }
}
