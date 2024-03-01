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
  hours: number
  minutes?: number
  seconds?: number
  customTimeZone?: string
}

/**
 * Returns the date and time in ISO 8061 and formatted in UTC (no offset).
 */
export const getIso8061DateTime = ({
  year,
  monthIndex,
  day,
  hours,
  minutes = 0,
  seconds = 0,
  customTimeZone,
}: GetIso8061DateTimeArgs): { iso8061DateTime: string } => {
  const offset = getGmtOffsetMinutes(customTimeZone)
  const iso8061DateTime = parseISO(
    formatISO(Date.UTC(year, monthIndex, day, hours, minutes - offset, seconds))
  ).toISOString()
  return { iso8061DateTime }
}
