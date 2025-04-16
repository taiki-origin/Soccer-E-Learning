import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

export default function SignInButton() {
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
                <LoginIcon />
                Log in
            </Button>
        </div>
    );
}
