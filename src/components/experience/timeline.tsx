import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { useTranslation } from 'react-i18next';
import ExperienceCompany from './company';
import ExperienceDates from './dates';

function ExperienceTimeline() {
  const { t } = useTranslation();

  const timeline = {
    '2018-08-01_': `Globant_${t('Experience.Front')}`,
    '2019-08-01_': `Stanley Black & Decker_${t('Experience.Front')}`,
    '2019-02-01_2019-08-31': `Quantcast_${t('Experience.Front')}`,
    '2018-08-01_2019-01-31': `Banco Davivienda_${t('Experience.Front')}`,
    '2017-08-01_2018-07-31': `Soft Dev Team_${t('Experience.Full')}`,
    '2015-04-01_2017-05-31': `Optime Consulting_${t('Experience.Back')}`,
    '2012-12-01_2015-03-31': `Loma Management Ltd._${t('Experience.Full')}`,
    '2011-09-01_2012-11-01': `Freelance_${t('Experience.Full')}`,
  };

  const expLenght = Object.keys(timeline).length;

  return (
    <Timeline>
      {Object.entries(timeline).map(([date, company], idx) => (
        <TimelineItem key={company}>
          <TimelineOppositeContent>
            <ExperienceDates date={date} />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {(expLenght > idx + 1) && (
              <TimelineConnector
                sx={{ backgroundColor: theme => theme.palette.primary.main }}
              />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <ExperienceCompany company={company} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default ExperienceTimeline;
