import { Button } from "@mui/material";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export default function SignUpButton() {
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
                <AppRegistrationIcon sx={{ fontSize: 30 }} />
                Sign up</Button>
        </div>
    );
}
