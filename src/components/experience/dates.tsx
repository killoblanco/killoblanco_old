import { useTranslation } from 'react-i18next'
import { DateTime } from 'luxon'
import { Typography } from '@mui/material'
import React from 'react'

export const Dates = ({ date }: { date: string }): JSX.Element => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language
  const DATE_FORMAT = 'MMM yyyy'
  const [start, end] = date.split('_')

  const parseDate = (date: string | undefined): string => {
    let nextDate = DateTime.local({ locale }).toFormat(DATE_FORMAT)
    if (date != null) {
      nextDate = DateTime.fromISO(date, { locale }).toFormat(DATE_FORMAT)
    }
    return nextDate[0].toUpperCase() + nextDate.slice(1)
  }

  const getDiff = (start: string, end: string): string => {
    let endDate = DateTime.local({ locale })
    if (end !== '') endDate = DateTime.fromISO(end, { locale })
    const { years, months } = endDate.diff(
      DateTime.fromISO(start, { locale }),
      ['years', 'months']
    ).toObject()
    const nextMonths = +(months ?? 0).toFixed(0)

    if (years != null) {
      return `${t('Experience.Year', { count: years })} ${t('Experience.Month', { count: nextMonths })}`
    }
    return `${t('Experience.Month', { count: nextMonths })}`
  }

  return (
    <>
      <Typography variant="subtitle1">
        {`${parseDate(start)} - ${parseDate(end)}`}
      </Typography>
      <Typography variant="subtitle2">
        {getDiff(start, end)}
      </Typography>
    </>
  )
}
