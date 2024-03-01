/*
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

/**
 * Returns the long offset time zone name.
 */
const getTimeZoneName = (locale: string, timeZone: string): string => {
  const date = new Date()
  const timeZoneName = Intl.DateTimeFormat(locale, {
    timeZone,
    timeZoneName: 'longOffset',
  })
    .formatToParts(date)
    .filter(({ type }) => type === 'timeZoneName')[0].value
  return timeZoneName
}

const enum GmtOffsetStates {
  Hours = 'HOURS',
  Minutes = 'MINUTES',
}

const enum GmtOffsetTypes {
  Idle = 'IDLE',
  Add = 'ADD',
  Subtract = 'SUBTRACT',
}

export const getGmtOffsetMinutes = (customTimeZone?: string): number => {
  const { locale, timeZone } = Intl.DateTimeFormat().resolvedOptions()
  const timeZoneName = getTimeZoneName(locale, customTimeZone ?? timeZone)
  const longGmtOffset = timeZoneName.split('GMT')[1]

  const gmtOffsetElements = {
    state: GmtOffsetStates.Hours,
    type: GmtOffsetTypes.Idle,
    hours: '',
    minutes: '',
  }

  for (let i = 0; i < longGmtOffset.length; i++) {
    const character = longGmtOffset[i]
    switch (character) {
      case '+':
        gmtOffsetElements.type = GmtOffsetTypes.Add
        break
      case '-':
        gmtOffsetElements.type = GmtOffsetTypes.Subtract
        break
      case ':':
        gmtOffsetElements.state = GmtOffsetStates.Minutes
        break
      default: {
        const { state, hours, minutes } = gmtOffsetElements
        if (state === GmtOffsetStates.Hours) {
          gmtOffsetElements.hours = hours.concat(character)
        }
        if (state === GmtOffsetStates.Minutes) {
          gmtOffsetElements.minutes = minutes.concat(character)
        }
      }
    }
  }

  const { type, hours, minutes } = gmtOffsetElements

  let gmtOffsetMinutes = ''
  if (type === GmtOffsetTypes.Subtract) {
    gmtOffsetMinutes = gmtOffsetMinutes.concat('-')
  }
  const totalMinutes = (Number(hours) * 60 + Number(minutes)).toString()
  gmtOffsetMinutes = gmtOffsetMinutes.concat(totalMinutes)

  return Number(gmtOffsetMinutes)
}
