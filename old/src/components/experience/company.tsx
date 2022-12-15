import { Typography } from '@mui/material';

function ExperienceCompany({ company }: { company: string }) {
  const [name, role] = company.split('_');
  return (
    <>
      <Typography variant="h6">
        {name}
      </Typography>
      <Typography variant="subtitle1">
        {role}
      </Typography>
    </>
  );
}

export default ExperienceCompany;
