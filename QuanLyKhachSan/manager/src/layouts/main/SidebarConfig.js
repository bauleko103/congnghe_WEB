import {
    Dashboard,
    Architecture,
    Feed,
    AssignmentInd,
    AltRoute,
    ViewCarousel,
    Announcement,
    Subtitles
} from '@mui/icons-material';

// path
import { PATH_DASHBOARD } from '../../routes/path';

const ICONS = {
    dashboard: <Dashboard />,
    project: <Architecture />,
    news: <Feed />,
    architect: <AssignmentInd />,
    menu: <AltRoute />,
    banner: <ViewCarousel />,
    about: <Announcement />,
    footer: <Subtitles />
};

const SIDEBAR_CONFIG = [
    {
        items: [
            {
                title: 'dashboard',
                path: PATH_DASHBOARD.root,
                icon: ICONS.dashboard
            },
        ]
    },
    {
        subheader: 'Quản lý',
        items: [
            {
                title: 'Phòng',
                path: PATH_DASHBOARD.project.list,
                icon: ICONS.project
            },
            {
                title: 'Tin tức',
                path: PATH_DASHBOARD.news.list,
                icon: ICONS.news
            },
            {
                title: 'Khách hàng',
                path: PATH_DASHBOARD.architect.list,
                icon: ICONS.architect
            }
        ]
    },
    {
        subheader: 'Ứng dụng',
        items: [
            {
                title: 'Điều hướng',
                path: PATH_DASHBOARD.menu,
                icon: ICONS.menu
            },
            {
                title: 'Ảnh trang chủ',
                path: PATH_DASHBOARD.banner,
                icon: ICONS.banner
            },
            {
                title: 'Về A7 Studio',
                path: PATH_DASHBOARD.about,
                icon: ICONS.about
            },
            {
                title: 'Cuối trang',
                path: PATH_DASHBOARD.footer,
                icon: ICONS.footer
            },
        ]
    }
];

export default SIDEBAR_CONFIG;