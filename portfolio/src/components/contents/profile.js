import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function Profile() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <h1>Profile</h1>
                    </Grid>
                    <Grid item xs={8}>
                        名前:
                        <br />
                        性別:
                        <br />
                        趣味:
                        <br />
                        自己紹介:
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}