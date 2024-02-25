/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */
/** */

import { formatISO, parseISO } from 'date-fns'
import { getGmtOffsetMinutes } from './getGmtOffsetMinutes'

export interface GetIso8061DateTimeArgs {
  year: number
  monthIndex: number
  day: number
  hour: number
  minutes?: number
  seconds?: number
  customTimeZone?: string
}

/**
 * Returns the date and time in ISO 8061 format without an offset.
 */
export const getIso8061DateTime = ({
  year,
  monthIndex,
  day,
  hour,
  minutes = 0,
  seconds = 0,
  customTimeZone,
}: GetIso8061DateTimeArgs): { iso8061DateTime: string } => {
  const offset = getGmtOffsetMinutes(customTimeZone)
  const iso8061DateTime = parseISO(
    formatISO(Date.UTC(year, monthIndex, day, hour, minutes - offset, seconds))
  ).toISOString()
  return { iso8061DateTime }
}
