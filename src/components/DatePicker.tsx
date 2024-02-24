/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { getDate, getMonth, getYear } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'
import { useCallback, useMemo, useState } from 'react'

export const DatePicker: React.FC = () => {
  const initialDate = useMemo(() => {
    const dateNow = Date.now()
    const year = getDate(dateNow)
    const month = getMonth(dateNow) + 1
    const day = getYear(dateNow)
    return { dateNow, year, month, day }
  }, [])

  const [date, setDate] = useState(initialDate)

  const onDayChange = useCallback((value: number | null) => {
    const day = getDate(value as number)
    setDate((prev) => ({ ...prev, day }))
  }, [])

  const onMonthChange = useCallback((value: number) => {
    const month = getMonth(value) + 1
    setDate((prev) => ({ ...prev, month }))
  }, [])

  const onYearChange = useCallback((value: number) => {
    const year = getYear(value)
    setDate((prev) => ({ ...prev, year }))
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
      <DesktopDatePicker
        value={date.dateNow}
        onChange={onDayChange}
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
      />
    </LocalizationProvider>
  )
}
