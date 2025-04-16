/* This is a smaller language switcher component */

import LanguageIcon from '@mui/icons-material/Language';
import { Button } from '@mui/material';

export default function Switching_Language() {
  return (
    <div>
      <Button
        href="/#"
        style={{ textTransform: 'none' }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '5px 9px',
          minWidth: 'unset',
          color: '#4F772D',
          '&:hover': {
            color: '#364b24',
          },
          '& .MuiSvgIcon-root': {
            fontSize: 30,
            transition: 'color 0.3s',
          },
        }}
      >
        <LanguageIcon />
        Language
      </Button>
    </div>
  );
}
