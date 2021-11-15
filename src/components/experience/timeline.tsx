import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import ExperienceCompany from './company';
import ExperienceDates from './dates';

function ExperienceTimeline() {
  const timeline = {
    '2018-08-01_': 'Globant_Desarrorllador Front-End',
    '2019-08-01_': 'Stanley Black & Decker_Desarrorllador Front-End',
    '2019-02-01_2019-08-31': 'Quantcast_Desarrorllador Front-End',
    '2018-08-01_2019-01-31': 'Banco Davivienda_Desarrorllador Front-End',
    '2017-08-01_2018-07-31': 'Soft Dev Team_Desarrorllador Full-Stack',
    '2015-04-01_2017-05-31': 'Optime Consulting_Desarrorllador Back-End',
    '2012-12-01_2015-03-31': 'Loma Management Ltd._Desarrorllador Full-Stack',
    '2011-09-01_2012-11-01': 'Freelance_Desarrorllador Full-Stack',
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
