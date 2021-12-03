import { Link } from 'react-router-dom';

import { styled } from "@mui/material/styles";
import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import logo from './logo.svg';
import { Button } from '@mui/material';

export const HeaderW = () => {
    return (
        <div>
            
           <AutoGrid/>
        </div>
    )
};
const BootstrapButton = styled(Button)({
    boxShadow: "none",
    boxSizing: "small",
    textTransform: "none",
    fontSize: 12,
    fontWeight: 300,
    color: "#333333",
    lineHeight: 0,
    padding:0,
    backgroundColor: "#ffff",
    marginLeft: "-24px",
    marginRight: "-24px",
    fontFamily: ["Roboto"].join(","),
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


const GridMenu = styled(Grid)(({ 
    

textAlign: 'center',

boxShadow: "none",
textTransform: "none",
marginTop:"1rem",

color: "#333333",

}));

export default function AutoGrid() {
return (
    <div class="App-header">
            
     
            <Link to="/home" style={{textDecoration:"none"}}>
               
              
                <img src={logo} className="App-logo" alt="logo" />
                    
               
            </Link>
        

        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={3}>
            <GridMenu item xs  >
                <Link to="/projects" style={{textDecoration:"none"}}>
                    <BootstrapButton>
                        Projects  
                    
                    </BootstrapButton>      
                </Link>
            </GridMenu>

            <GridMenu item xs>
                    <BootstrapButton>
                       |  
                    </BootstrapButton>    
            </GridMenu>

            <GridMenu item xs>
                <Link to="/news" style={{textDecoration:"none"}}>
                    <BootstrapButton>
                        News
                    
                    </BootstrapButton>     
                </Link>
            </GridMenu>
            
            <GridMenu item xs>
                    <BootstrapButton>
                       |  
                    </BootstrapButton>    
            </GridMenu>

            

            <GridMenu item xs>
                <Link to="/about" style={{textDecoration:"none"}}>
                    <BootstrapButton>
                       About
                    
                    </BootstrapButton>    
                </Link>
            </GridMenu>
            
            <GridMenu item xs>
                    <BootstrapButton>
                       |  
                    </BootstrapButton>    
            </GridMenu>

            <GridMenu item xs>
                <Link to="/contact" style={{textDecoration:"none"}}>
                    <BootstrapButton>
                       Contact
                    
                    </BootstrapButton>        
                </Link>
            </GridMenu>
            </Grid>
        </Box>
    </div>
    
);
}
  
  
  