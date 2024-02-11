/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { render, screen } from '@testing-library/react'
import React from 'react'
import { App } from './App'

test('renders learn react link', () => {
  render(<App />)
  const textElement = screen.getByText(/Hello world/i)
  expect(textElement).toBeInTheDocument()
})
