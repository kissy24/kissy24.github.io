import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function About() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="profile"></img>
                    </Grid>
                    <Grid item xs={8}>
                        <h1>About me</h1>
                        <div align="left">神戸大学在学時に、モルガン・スタンレーや共進社印刷株式会社等のインターンシップを経てプロダクトを創る面白さを知り、株式会社ワークスアプリケーションズに入社。その後、分社化した株式会社Works Human Intelligenceに転籍し、現在は株式会社フィエルテで「テックリード 兼 新人教育」を担当しています。</div>
                        <br />
                        <div align="left">メイン言語はPythonでプライベートを含め7年程度の付き合いになります。ただ、Java,C#のキャリアもそれなりにあり、OOPや型に重きをおいたコーディングスタイルになっています。自然言語処理や、PKGシステム、RPAなど複数の経験があります。</div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}