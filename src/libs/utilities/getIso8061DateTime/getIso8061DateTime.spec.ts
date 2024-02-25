/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */
/** */

import { isValid, parseISO } from 'date-fns'
import { GetIso8061DateTimeArgs, getIso8061DateTime } from './index'

// Command: npm test --test-file=getIso8061DateTime.spec.ts
describe('Function - getIso8061DateTime', () => {
  it('Returns a valid date', () => {
    const args: GetIso8061DateTimeArgs = {
      year: 2024,
      monthIndex: 1,
      day: 25,
      hour: 11,
    }
    const { iso8061DateTime } = getIso8061DateTime(args)
    const received = isValid(parseISO(iso8061DateTime))
    expect(received).toEqual(true)
  })
})
