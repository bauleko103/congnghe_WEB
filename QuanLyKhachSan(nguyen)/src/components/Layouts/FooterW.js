import { styled } from "@mui/material/styles";
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Link } from "@mui/material";


export const FooterW = () => {
    return (
        <div>
            
           <AutoGrid/>
        </div>
    )
};



  
const FootButton = styled(Button)({
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
    <div class="App-footer">
            
     
        

        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={3}>
            <GridMenu item xs  >
                <Link to="/projects" style={{textDecoration:"none"}}>
                    <FootButton href="https://github.com/Joeyryanbridges">
                      
                                Facebook  
                        
                    </FootButton>      
                </Link>
            </GridMenu>

            <GridMenu item xs>
                <FootButton>
                        
                        | 
                
                </FootButton>   
            </GridMenu>

            <GridMenu item xs>
                <Link to="/news" style={{textDecoration:"none"}}>
                <FootButton href="https://github.com/Joeyryanbridges">
                      
                      Facebook  
              
          </FootButton>     
                </Link>
            </GridMenu>
            <GridMenu item xs>
                <FootButton>
                        
                        | 
                
                </FootButton>   
            </GridMenu>

            

            <GridMenu item xs>
                <Link to="/about" style={{textDecoration:"none"}}>
                <FootButton href="https://github.com/Joeyryanbridges">
                      
                      Facebook  
              
          </FootButton>   
                </Link>
            </GridMenu>
            
            <GridMenu item xs>
                <FootButton>
                        
                        | 
                
                </FootButton>   
            </GridMenu>

            <GridMenu item xs>
                <Link to="/contact" style={{textDecoration:"none"}}>
                <FootButton href="https://github.com/Joeyryanbridges">
                      
                      Facebook  
              
          </FootButton>           
                </Link>
            </GridMenu>
            </Grid>
        </Box>
    </div>
    
);
}
  
  
  