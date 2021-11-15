import { Container, Grid, Typography } from '@mui/material';
import StackIcon, { iconList } from '../../assets/stack/stack-icon';
import Section from '../../components/section';
import SkillCard from '../../components/skill-card';

function Skills() {
  return (
    <Section gradientDir="bottom" py={4}>
      <Container fixed>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Habilidades & Tecnologias
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <SkillCard />
          </Grid>
          <Grid item xs={12} md={8} container spacing={4}>
            {iconList.map((icon) => (
              <Grid item xs={3} key={icon}>
                <StackIcon name={icon} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Skills;
