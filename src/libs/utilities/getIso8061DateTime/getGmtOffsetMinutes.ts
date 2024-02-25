/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */
/** */

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

export const getGmtOffsetMinutes = (customTimeZone: string) => {
  const { locale, timeZone } = Intl.DateTimeFormat().resolvedOptions()
  const timeZoneName = getTimeZoneName(locale, customTimeZone ?? timeZone)

  const longGmtOffset = timeZoneName.split('GMT')[1]
  const gmtOffsetElements = {
    state: 'HOURS',
    type: null as string,
    hours: '',
    minutes: '',
  }

  for (let i = 0; i < longGmtOffset.length; i++) {
    const character = longGmtOffset[i]
    switch (character) {
      case '+':
        gmtOffsetElements.type = 'ADD'
        break
      case '-':
        gmtOffsetElements.type = 'SUBTRACT'
        break
      case ':':
        gmtOffsetElements.state = 'MINUTES'
        break
      default: {
        const { state, hours, minutes } = gmtOffsetElements
        if (state === 'HOURS') {
          gmtOffsetElements.hours = hours.concat(character)
        }
        if (state === 'MINUTES') {
          gmtOffsetElements.minutes = minutes.concat(character)
        }
      }
    }
  }

  const { type, hours, minutes } = gmtOffsetElements
  let gmtOffsetMinutes = ''
  if (type === 'SUBTRACT') gmtOffsetMinutes = gmtOffsetMinutes.concat('-')
  const totalMinutes = (Number(hours) * 60 + Number(minutes)).toString()
  gmtOffsetMinutes = gmtOffsetMinutes.concat(totalMinutes)

  return Number(gmtOffsetMinutes)
}
