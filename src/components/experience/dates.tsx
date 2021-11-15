import { Typography } from '@mui/material';
import moment from 'moment';

function ExperienceDates({ date }: { date: string }) {
  const [start, end] = date.split('_');
  const endDate = end ? end : undefined;

  const parseDate = (date: string | undefined) => moment(date).format('MMM YYYY');
  const calcDiff = (start: string, end: string | undefined) => {
    const year = moment(end).diff(moment(start), 'y');
    const month = moment(end).diff(moment(start), 'M') % 12;
    if (year) return `${year} Años ${month} Meses`;
    return `${month} Meses`;
  };

  return (
    <>
      <Typography variant="subtitle2">
        {`${parseDate(start)} - ${parseDate(endDate)}`}
      </Typography>
      <Typography variant="body2">
        {calcDiff(start, endDate)}
      </Typography>
    </>
  );
}

export default ExperienceDates;
