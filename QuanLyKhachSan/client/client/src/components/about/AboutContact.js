import React from "react";
import Iframe from "react-iframe";
import { Typography, Box } from "@mui/material";



export default function AboutContact() {
    return (
        <>
            <Typography className="section-title"
                sx={{
                    marginRight: '16px',
                    fontSize: '18px'
                }}>
                Contact
            </Typography>
            <div className="about-img">
                
                    <Iframe className='map' sx={{width: "100%", height: "280", border: 0}} loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=28%20duong%20thao%20dien%2C%20quan%202&key=AIzaSyBP2X7BZf05AX2VVeGxIgwap-oA_XkuWTQ"></Iframe>
                
            </div>
            <Box sx={{ margin: '20px 0'}}>
                <Typography>
                    A7 STUDIO
                </Typography>
                <Typography variant="p" sx={{ fontSize: '12px', color: '#000000' }}>
                    Address:
                    <Typography variant="p" sx={{ fontSize: '12px', color: '#6D6D6D', marginLeft: '10px' }}>
                        28 Thao Dien D2 HCM
                    </Typography>
                </Typography>
                <br />
                <Typography variant="p" sx={{ fontSize: '12px', marginTop: '80px', color: '#000000' }} >
                    Phone:
                    <Typography variant="p" sx={{ fontSize: '12px', color: '#6D6D6D', marginLeft: '10px' }}>
                        +8497834531
                    </Typography>
                </Typography>
                <br />
                <Typography variant="p" sx={{ fontSize: '12px', marginTop: '80px', color: '#000000' }} >
                    Mail:
                    <Typography variant="p" sx={{ fontSize: '12px', color: '#6D6D6D', marginLeft: '10px' }}>
                        A7studio@gmail.com
                    </Typography>
                </Typography>
            </Box>
        </>
    )
}
