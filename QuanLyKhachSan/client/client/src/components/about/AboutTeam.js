import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import MemberCard from "./MemberCard";
import { styled } from '@mui/material/styles';
import architectsApi from "../../api/architectsApi";

const StyleBox = styled(Box)({
    margin: '0 auto',
    backgroundColor: 'white',
    height: 'auto',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    flexDirection: 'colurmn',
    display: 'flex'
});

export default function AboutTeam() {
    const [architects, setArchitects] = useState(null);

    useEffect(() => {
        const fetchArchitects = async () => {
            try {
                const response = await architectsApi.allArchitects();
                setArchitects(response);
            } catch (error) {
                console.log('Failed to fetch architects: ', error)
            }
        }
        fetchArchitects();
    }, [])

    return (
        <>
        {architects && (
            <Box sx={{ padding: '20px 0' }}>
                <Typography className="section-title"
                    sx={{
                        marginRight: '16px',
                        fontSize: '18px'
                    }}>
                    Team
                </Typography>
                <StyleBox>
                    <div className="scrollbar scrollbar-about" id="style-4">
                        <div className="force-overflow">

                            {architects.map((member, index) => (
                                <MemberCard key={index} member={member} />
                            ))}

                        </div>
                    </div>
                </StyleBox>
            </Box>
        )}
            {!architects && ('Loading...')}
        </>
    )
}
