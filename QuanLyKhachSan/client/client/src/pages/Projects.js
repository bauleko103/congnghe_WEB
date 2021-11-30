import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProjectCard from '../components/project/ProjectCard';
import projectsMock from '../__mocks__/projectsMock';

const StyleBox = styled(Box)({
  padding: '1.5em',
  // backgroundColor: '#cfe8fc',
  height: '100vh',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn'
});


export default function Projects() {
  return (
    <React.Fragment>
      <Container >
        <StyleBox >
          {projectsMock.map((project) => (
            <ProjectCard project={project} />
          ))}
        </StyleBox>
      </Container>
    </React.Fragment>
  );
}
