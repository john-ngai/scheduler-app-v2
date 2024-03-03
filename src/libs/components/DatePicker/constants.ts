/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { getDate, getMonth, getYear } from 'date-fns'
import { DatePickerElements } from './types'

const dateNow = Date.now()

export const initialDatePickerElements: DatePickerElements = {
  year: getYear(dateNow),
  monthIndex: getMonth(dateNow),
  day: getDate(dateNow),
}
