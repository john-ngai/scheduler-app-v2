/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { getDate, getMonth, getYear } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'
import { useCallback, useMemo, useState } from 'react'
import { DatePickerProps } from './types'

export const DatePicker: React.FC<DatePickerProps> = ({
  dateElements,
  setDateElements,
}) => {
  const { year, monthIndex, day } = dateElements
  const value = useMemo(
    () => Number(new Date(year, monthIndex, day)),
    [year, monthIndex, day]
  )

  const onDayChange = useCallback(
    (value: number) => {
      const day = getDate(value as number)
      setDateElements((prev) => ({ ...prev, day }))
    },
    [setDateElements]
  )

  const onMonthChange = useCallback(
    (value: number) => {
      const monthIndex = getMonth(value)
      setDateElements((prev) => ({ ...prev, monthIndex }))
    },
    [setDateElements]
  )

  const onYearChange = useCallback(
    (value: number) => {
      const year = getYear(value)
      setDateElements((prev) => ({ ...prev, year }))
    },
    [setDateElements]
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
      <DesktopDatePicker
        value={value}
        onChange={onDayChange}
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
      />
    </LocalizationProvider>
  )
}
