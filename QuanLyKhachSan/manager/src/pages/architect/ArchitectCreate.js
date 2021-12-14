import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';

// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { ArchitectForm } from '../../components/architect';
// path
import { PATH_DASHBOARD } from '../../routes/path';

const ArchitectCreate = () => {
    const { pathname } = useLocation();
    const isEdit = pathname.includes('edit');
    const { architects } = useSelector(state => state.architect);
    const architect = architects.find(architect => architect._id === pathname.split('/').pop());
    return (
        <Page title={`${architect?.name || 'Thêm mới khách hàng'} | A7 Studio`}>
            <Container sx={{ pb: 3 }}>
                <HeaderBreadcrumbs
                    header={!isEdit ? 'Tạo khách hàng' : architect ? architect.name : ''}
                    links={[
                        { name: 'Dashboard', href: PATH_DASHBOARD.root },
                        { name: 'khách hàng', href: PATH_DASHBOARD.architect.list },
                    ]}
                />
                <ArchitectForm isEdit={isEdit} architect={architect} />
            </Container>
        </Page>
    );
};

export default ArchitectCreate;
