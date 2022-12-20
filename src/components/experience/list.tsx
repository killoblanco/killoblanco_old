import { useTranslation } from 'react-i18next'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab'
import { Dates } from './dates'
import { Company } from './company'

export const List = () => {
  const { t } = useTranslation()

  const timeline = {
    '2018-08-01_': `Globant_${t('Experience.Front')}`,
    '2022-07-01_': `The Walt Disney Company_${t('Experience.Front')}`,
    '2022-04-01_2022-06-01': `Empower_${t('Experience.Front')}`,
    '2019-08-01_2022-03-01': `Stanley Black & Decker_${t('Experience.Front')}`,
    '2019-02-01_2019-08-01': `Quantcast_${t('Experience.Front')}`,
    '2018-08-01_2019-01-01': `Banco Davivienda_${t('Experience.Front')}`,
    '2017-08-01_2018-07-01': `Soft Dev Team_${t('Experience.Full')}`,
    '2015-04-01_2017-05-01': `Optime Consulting_${t('Experience.Back')}`,
    '2012-12-01_2015-03-01': `Loma Management Ltd._${t('Experience.Full')}`,
    '2011-09-01_2012-11-01': `Freelance_${t('Experience.Full')}`
  }

  const expLenght = Object.keys(timeline).length

  return (
    <Timeline>
      {Object.entries(timeline).map(([date, company], idx) => (
        <TimelineItem key={company}>
          <TimelineOppositeContent sx={{pt:0, pb:4, pl:0}}>
            <Dates date={date} />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {(expLenght > idx + 1) && (
              <TimelineConnector
                sx={{ backgroundColor: theme => theme.palette.primary.main }}
              />
            )}
          </TimelineSeparator>
          <TimelineContent sx={{pt:0, pb:4, pr:0}}>
            <Company company={company} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
