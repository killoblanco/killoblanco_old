import { AutoAwesomeRounded } from '@mui/icons-material';
import { alpha, Card, CardContent, CardHeader, Typography } from '@mui/material';

function SkillCard() {
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
        title="Desarrollador de Software"
      />
      <CardContent>
        <Typography>
          Constructor de infraestructura y aplicaciones full-stack multiplataforma con
          tecnologías de vanguardia.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
