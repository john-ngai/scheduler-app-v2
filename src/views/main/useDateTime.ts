/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import {
  GetIso8061DateTimeArgs,
  getIso8061DateTime,
} from '../../libs/utilities'

type Args = Pick<GetIso8061DateTimeArgs, 'year' | 'monthIndex' | 'day'> & {
  startHours: number
  startMinutes: number
  endHours: number
  endMinutes: number
}

interface Return {
  startDateTime: string
  endDateTime: string
}

export const useDateTime = ({
  year,
  monthIndex,
  day,
  startHours,
  startMinutes,
  endHours,
  endMinutes,
}: Args): Return => {
  const { iso8061DateTime: startDateTime } = getIso8061DateTime({
    year,
    monthIndex,
    day,
    hours: startHours,
    minutes: startMinutes,
  })

  const { iso8061DateTime: endDateTime } = getIso8061DateTime({
    year,
    monthIndex,
    day,
    hours: endHours,
    minutes: endMinutes,
  })

  return { startDateTime, endDateTime }
}
