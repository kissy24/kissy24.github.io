import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Career() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <h3>会社名</h3>
                    </Grid>
                    <Grid item xs={3}>
                        <h3>在籍期間</h3>
                    </Grid>
                    <Grid item xs={6}>
                        <h3>説明</h3>
                    </Grid>
                    <Grid item xs={3}>
                        <p>株式会社フィエルテ</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p>2020年6月〜</p>
                    </Grid>
                    <Grid item xs={6}>
                        <div align="left">会計における連結決算業務のRPAシステムを開発しています。
                            主な役割は、RPAを支えるライブラリの設計・開発や部内のメンバー対する技術支援・サポートになります。
                            また、新人エンジニアの教育を統括していたり、エンジニア採用にも少し顔を出しています。</div>
                    </Grid>
                    <Grid item xs={3}>
                        <p>株式会社Works Human Intelligence</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p>2019年8月〜2020年2月</p>
                    </Grid>
                    <Grid item xs={6}>
                        <div align="left">株式会社ワークスアプリケーションズの分社化に伴い、転籍。
                            業務自体は変わりありません。</div>
                    </Grid>
                    <Grid item xs={3}>
                        <p>株式会社ワークスアプリケーションズ</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p>2018年4月〜2019年7月</p>
                    </Grid>
                    <Grid item xs={6}>
                        <div align="left">研修を3ヶ月ほど受け、COMPANYのバージョンアップ支援業務に6ヶ月程度従事。
                            その後、開発部署に異動し、COMPANYの人事システムの保守開発、サブシステムの新規開発を1年程度していました。</div>
                    </Grid>
                    <Grid item xs={3}>
                        <p>共進社印刷株式会社(インターン)</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p>2015年9月〜2016年6月</p>
                    </Grid>
                    <Grid item xs={6}>
                        <div align="left">医薬品全文検索サイトの構築、及び類似薬のレコメンド検索の研究開発をしていました。
                            C#でバックエンドやWord2Vecの結果を解析するロジックの開発、PythonでWord2VecやMahoutなどを利用したデータ解析、自然言語処理をしていました。</div>
                    </Grid>
                    <Grid item xs={3}>
                        <p>モルガン・スタンレー(インターン)</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p>2015年8月〜2015年8月</p>
                    </Grid>
                    <Grid item xs={6}>
                        <div align="left">テクノロジー情報技術コースのインターンシップに参加。
                            簡易的な証券取引サービスをハッカソン形式で開発・発表しました。</div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}