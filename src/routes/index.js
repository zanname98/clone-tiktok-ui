import routesConfig from '~/config/routes';

//Layouts
import { HeaderOnly } from '~/components/Layouts';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRouters = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.profile, component: Profile },
];

const privateRouters = [];

export { publicRouters, privateRouters };
