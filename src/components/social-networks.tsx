import { GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';

function SocialNetworks() {
  return (
    <Stack direction="row" spacing={2} mt={4}>
      <IconButton
        component="a"
        href="https://github.com/killoblanco"
        target="_about"
        size="large"
      >
        <GitHub fontSize="inherit" />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/killoblanco/"
        target="_about"
        size="large"
      >
        <LinkedIn fontSize="inherit" />
      </IconButton>
    </Stack>
  );
}

export default SocialNetworks;
