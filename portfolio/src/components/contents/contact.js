import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Contact() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <p><a href="https://github.com/kissy24">GitHub</a></p>
                    </Grid>
                    <Grid item xs={4}>
                        <p><a href="https://twitter.com/kissy_24">Twitter</a></p>
                    </Grid>
                    <Grid item xs={4}>
                        <p><a href="https://youtrust.jp/users/kissy24">Youtrust</a></p>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}