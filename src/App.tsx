/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import React from 'react'
import { DatePicker, TimePicker } from './libs/components'
import { Main } from './views'

export const App: React.FC = () => {
  return (
    <Main>
      <DatePicker />
      <TimePicker />
    </Main>
  )
}
