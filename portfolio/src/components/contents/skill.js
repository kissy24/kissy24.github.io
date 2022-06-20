import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Skill() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <p>Python</p>
                    </Grid>
                    <Grid item xs={8}>
                        <p>★★★★★</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>Go
                        </p>
                    </Grid>
                    <Grid item xs={8}>
                        <p>★★★★☆</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>Java
                        </p>
                    </Grid>
                    <Grid item xs={8}>
                        <p>★★★☆☆</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>C#
                        </p>
                    </Grid>
                    <Grid item xs={8}>
                        <p>★★★☆☆</p>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}