/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import React from 'react'
import { DatePicker } from './components'
import { TimePicker } from './components/TimePicker'
import { Main } from './views'

export const App: React.FC = () => {
  return (
    <Main>
      <DatePicker />
      <TimePicker />
    </Main>
  )
}
