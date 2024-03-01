/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { isValid, parseISO } from 'date-fns'
import {
  GetIso8061DateTimeArgs,
  getIso8061DateTime,
} from './getIso8061DateTime'

const year = 2024
const monthIndex = 1
const day = 25
const hours = 9
const minutes = 30

// Command: npm test --test-file=getIso8061DateTime.spec.ts
describe('Function - getIso8061DateTime', () => {
  it('Returns a valid date', () => {
    const args: GetIso8061DateTimeArgs = {
      year,
      monthIndex,
      day,
      hours,
    }
    const { iso8061DateTime } = getIso8061DateTime(args)
    const received = isValid(parseISO(iso8061DateTime))
    expect(received).toEqual(true)
  })
  it('Returns the correct date and time for a custom time zone (scenario #1)', () => {
    const args: GetIso8061DateTimeArgs = {
      year,
      monthIndex,
      day,
      hours,
      minutes,
      customTimeZone: 'America/Toronto',
    }
    const { iso8061DateTime: received } = getIso8061DateTime(args)
    const expected = '2024-02-25T14:30:00.000Z'
    expect(received).toEqual(expected)
  })
  it('Returns the correct date and time for a custom time zone (scenario #2)', () => {
    const args: GetIso8061DateTimeArgs = {
      year,
      monthIndex,
      day,
      hours,
      minutes,
      customTimeZone: 'America/Vancouver',
    }
    const { iso8061DateTime: received } = getIso8061DateTime(args)
    const expected = '2024-02-25T17:30:00.000Z'
    expect(received).toEqual(expected)
  })
})
