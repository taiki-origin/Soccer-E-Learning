'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function MainVisual() {
    const router_players = useRouter();
    const router_coaches = useRouter();

    const page_transition_to_players_screen = () => {
        router_players.push("/sub-page-players-components");
    };
    const page_transition_to_coaches_screen = () => {
        router_coaches.push("/sub-page-players-components");
    };

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
            <motion.div
                className="relative z-10 text-center p-6 max-w-3xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight">
                    <span className="text-green-400">Soccer Learning</span>
                </h1>
                <p className="text-lg sm:text-xl mb-8 text-gray-300">
                    Choose your role and start mastering the game — whether you <strong>lead</strong> or <strong>play</strong>.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                        <Button
                            variant="contained"
                            startIcon={<EmojiEventsIcon sx={{ fontSize: 36, color: '#fffde7' }} />}
                            onClick={page_transition_to_coaches_screen}
                            sx={{
                                background: 'linear-gradient(135deg, #66bb6a, #d4e157)',
                                color: 'black',
                                paddingX: 5,
                                paddingY: 2,
                                fontSize: '1.25rem',
                                borderRadius: '9999px',
                                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                                textTransform: 'none',
                                fontWeight: 700,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2
                            }}
                        >
                            FOR COACHES
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                        <Button
                            variant="contained"
                            startIcon={<SportsSoccerIcon sx={{ fontSize: 36, color: '#e0f7fa' }} />}
                            onClick={page_transition_to_players_screen}
                            sx={{
                                background: 'linear-gradient(135deg, #42a5f5, #26c6da)',
                                color: 'black',
                                paddingX: 5,
                                paddingY: 2,
                                fontSize: '1.25rem',
                                borderRadius: '9999px',
                                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                                textTransform: 'none',
                                fontWeight: 700,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2
                            }}
                        >
                            FOR PLAYERS
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
