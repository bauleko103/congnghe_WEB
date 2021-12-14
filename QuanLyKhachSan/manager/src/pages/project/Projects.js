import { Container } from '@mui/material';

// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { ProjectList } from '../../components/project';
// path
import { PATH_DASHBOARD } from '../../routes/path';

const Projects = () => {
    return (
        <Page title='Phòng | A7 Studio'>
            <Container sx={{ pb: 3 }}>
                <HeaderBreadcrumbs
                    header='Phòng'
                    links={[
                        { name: 'Dashboard', href: PATH_DASHBOARD.root },
                    ]}
                />
                <ProjectList />
            </Container>
        </Page>
    );
};

export default Projects;
