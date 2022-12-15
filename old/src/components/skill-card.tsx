import { AutoAwesomeRounded } from '@mui/icons-material';
import { alpha, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function SkillCard() {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        borderBottom: 4,
        borderColor: theme => theme.palette.primary.main,
        backgroundColor: theme => alpha(theme.palette.background.paper, 0.48),
        boxShadow: theme => theme.shadows[6],
      }}
    >
      <CardHeader
        avatar={<AutoAwesomeRounded color="primary" />}
        title={t('Skills.Card.Header')}
      />
      <CardContent>
        <Typography>
          {t('Skills.Card.Content')}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
