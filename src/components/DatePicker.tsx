/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { format, getDate, getMonth, getYear } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'
import { useCallback, useMemo, useState } from 'react'

export const DatePicker: React.FC = () => {
  const initialDateElements = useMemo(() => {
    const dateNow = Date.now()
    const year = getYear(dateNow)
    const monthIndex = getMonth(dateNow)
    const day = getDate(dateNow)
    return { dateNow, year, monthIndex, day }
  }, [])

  const [dateElements, setDateElements] = useState(initialDateElements)

  const { dateNow, year, monthIndex, day } = dateElements
  const date = format(new Date(year, monthIndex, day), 'yyyy-MM-dd')
  console.log('date =', date)

  const onDayChange = useCallback((value: number | null) => {
    const day = getDate(value as number)
    setDateElements((prev) => ({ ...prev, day }))
  }, [])

  const onMonthChange = useCallback((value: number) => {
    const monthIndex = getMonth(value)
    setDateElements((prev) => ({ ...prev, monthIndex }))
  }, [])

  const onYearChange = useCallback((value: number) => {
    const year = getYear(value)
    setDateElements((prev) => ({ ...prev, year }))
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
      <DesktopDatePicker
        value={dateNow}
        onChange={onDayChange}
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
      />
    </LocalizationProvider>
  )
}
