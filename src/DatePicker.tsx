/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { enUS } from 'date-fns/locale/en-US'
import { useMemo } from 'react'

export const DatePicker: React.FC = () => {
  const defaultValue = useMemo(() => Date.now(), [])
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
      <DesktopDatePicker
        defaultValue={defaultValue}
        onChange={(value) => console.log('date =', typeof value)}
      />
    </LocalizationProvider>
  )
}
