import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Typography } from "@mui/material";
import footerApi from '../../api/footerApi';


const BootstrapButton = styled(Button)({
    boxShadow: "none",
    boxSizing: "small",
    textTransform: "none",
    fontSize: '10px',
    fontWeight: 300,
    color: "#333333",
    lineHeight: 0,
    padding: 0,
    backgroundColor: "#ffff",
    marginLeft: "-24px",
    marginRight: "-24px",
    "&:hover": {
        backgroundColor: "#fff",
        color: "#999999",
        boxShadow: "none"
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#fff",
        borderColor: "#fff"
    },
});

const DisabledButton = styled(BootstrapButton)({
    pointerEvents: 'none',
});

const GridMenu = styled(Grid)(({
    textAlign: 'center',
    boxShadow: "none",
    textTransform: "none",
    marginTop: "2px",
    color: "#333333",
}));

export const FooterW = () => {
    const [footer, setFooter] = React.useState(null);

    React.useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await footerApi.allFooter();
                setFooter(response);

            } catch (error) {
                console.log('Failed to fetch banners: ', error)
            }
        }
        fetchBanners();
    }, [])

    console.log(footer)

    return (
        <div className="content-footer">
            <Link to="/home" style={{ textDecoration: "none", pointerEvents: "none" }}>
                <Typography sx={{
                    fontSize: "14px",
                    fontWeight: "200"
                }}>
                    A7 STUDIO
                </Typography>
            </Link>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={3} >
                    <GridMenu item xs  >
                        <Link to="/projects" style={{ textDecoration: "none" }}>
                            <BootstrapButton>
                                FACEBOOK
                            </BootstrapButton>
                        </Link>
                    </GridMenu>
                    <GridMenu item xs>
                        <BootstrapButton>
                            |
                        </BootstrapButton>
                    </GridMenu>
                    <GridMenu item xs>
                        <Link to="/news" style={{ textDecoration: "none" }}>
                            <BootstrapButton>
                                INSTAGRAM
                            </BootstrapButton>
                        </Link>
                    </GridMenu>
                    <GridMenu item xs>
                        <BootstrapButton>
                            |
                        </BootstrapButton>
                    </GridMenu>
                    <GridMenu item xs>
                        <Link to="/about" style={{ textDecoration: "none" }}>
                            <BootstrapButton>
                                YOUTUBE
                            </BootstrapButton>
                        </Link>
                    </GridMenu>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={3} sx={{ width: '350px' }}>
                    <GridMenu item xs  >
                        <DisabledButton >
                            28 Thao Dien D2 HCM
                        </DisabledButton>
                    </GridMenu>

                    <GridMenu item xs>
                            <DisabledButton>
                                +8497834531
                            </DisabledButton>
                    </GridMenu>

                    <GridMenu item xs>
                            <DisabledButton>
                                A7studio@gmail.com
                            </DisabledButton>
                    </GridMenu>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} >

                <Grid container spacing={3}>
                    <GridMenu item xs  >
                            <DisabledButton>
                                FAG
                            </DisabledButton>
                    </GridMenu>

                    <GridMenu item xs>
                            <DisabledButton>
                                LEGAL
                            </DisabledButton>
                    </GridMenu>
                </Grid>
            </Box>
        </div>
    )
};

