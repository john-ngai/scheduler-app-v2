/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import React from 'react'
import { Container, DatePicker } from './components'
import { TimePicker } from './components/TimePicker'

export const App: React.FC = () => {
  return (
    <Container>
      <DatePicker />
      <TimePicker />
    </Container>
  )
}
