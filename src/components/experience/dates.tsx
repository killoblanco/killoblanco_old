import { Typography } from '@mui/material';
import moment from 'moment';
import 'moment/locale/es';
import { useTranslation } from 'react-i18next';
import i18n from '../../locales';

function ExperienceDates({ date }: { date: string }) {
  const { t } = useTranslation();
  const [start, end] = date.split('_');
  const endDate = end ? end : undefined;

  moment.locale(i18n.language);

  const parseDate = (date: string | undefined) => {
    let d = moment(date).format('MMM YYYY');
    d = d.replace('.', '');
    return d[0].toUpperCase() + d.slice(1);
  };

  const calcDiff = (start: string, end: string | undefined) => {
    const year = moment(end).diff(moment(start), 'y');
    const month = moment(end).diff(moment(start), 'M') % 12;
    if (year) {
      return `${t('Experience.Year', { count: year })} ${t('Experience.Month', { count: month })}`;
    }
    return `${t('Experience.Month', { count: month })}`;
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
