import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import ProjectCard from '../components/project/ProjectCard';
import Pagination from '../components/Pagination/Pagination';
import projectApi from '../api/projectApi';
import LoadingScreen from '../components/LoandingScreen';

const StyleBox = styled(Box)({
  padding: '0',
  width: 900,
  margin: '0 auto',
  backgroundColor: 'white',
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  height: 'auto',
  zIndex: '100',
  position: 'relative'
});


export default function Projects() {
  const [projectList, setProjectList] = React.useState(null);
  const [filters, setFilters] = React.useState({
    number: 12,
    page: 1,
  });

  React.useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const response = await projectApi.listProject(filters.page, filters.number);
        setProjectList(response);
      } catch (error) {
        console.log('Failed to fetch project list: ', error)
      }
    }
    fetchProjectList();
  }, [filters])

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      page: newPage,
    })
  }

  return (
    <>
      {projectList && (
        <React.Fragment >

          <StyleBox >
            {projectList.projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </StyleBox>
          <Pagination
            pagination={projectList.pagination}
            onPageChange={handlePageChange}
          />
        </React.Fragment>
      )}
      {!projectList && (<LoadingScreen />)}
    </>

  );
}

