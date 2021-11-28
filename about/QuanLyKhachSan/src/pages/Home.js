
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SlideMenu from '../components/slide/SlideMenu';

const StyleBoxHome = styled(Box)({
  padding: '1.5em',
  // backgroundColor: '#cfe8fc',
  height: '100vh',
  
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn'
});


export const Home = () => {
    return (
      <>
      <StyleBoxHome>
      <Item > <SlideMenu/></Item>
      <Item > <SlideMenu/></Item>
      
      <Item > <AutoGrid/></Item>
      </StyleBoxHome>
     
      
      </>
      
       
          
       
    )
};




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: "none",
  textTransform: "none",
  marginTop:"1rem",
 
  alignItems: "center",
  marginLeft: "15rem",
  marginRight: "15rem",
}));


export function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
            <p>baule</p>
        </Grid>
        <Grid item xs>
            <p>baule</p>
        </Grid>
        <Grid item xs>
            <p>baule</p>
        </Grid>
        <Grid item xs>
            <p>baule</p>
        </Grid>
      </Grid>
    </Box>
  );
}


