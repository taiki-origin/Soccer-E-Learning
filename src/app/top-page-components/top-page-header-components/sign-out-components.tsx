import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export default function SignOutButton() {
    return (
        <div>
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
                    <LogoutIcon sx={{ fontSize: 30 }} />
                    Log out</Button>
            </div>


        </div>
    );
}