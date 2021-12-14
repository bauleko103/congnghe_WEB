import { Container } from '@mui/material';

// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { ArchitectList } from '../../components/architect';
// path
import { PATH_DASHBOARD } from '../../routes/path';

const Architects = () => {
    return (
        <Page title='khách hàng | A7 Studio'>
            <Container sx={{ pb: 3 }}>
                <HeaderBreadcrumbs
                    header='khách hàng'
                    links={[
                        { name: 'Dashboard', href: PATH_DASHBOARD.root },
                    ]}
                />
                <ArchitectList />
            </Container>
        </Page>
    );
};

export default Architects;
