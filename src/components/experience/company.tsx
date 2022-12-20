import { Typography } from '@mui/material';

export const Company = ({ company }: { company: string }) => {
  const [name, role] = company.split('_');
  return (
    <>
      <Typography variant="h5" component="p">
        {name}
      </Typography>
      <Typography variant="subtitle1" component="p">
        {role}
      </Typography>
    </>
  );
}
