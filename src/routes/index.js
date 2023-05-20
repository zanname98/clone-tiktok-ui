import config from '~/config';

//Layouts
import { HeaderOnly } from '~/layouts';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRouters = [
    { path:config.routes.home, component: Home },
    { path:config.routes.following, component: Following },
    { path:config.routes.upload, component: Upload, layout: HeaderOnly },
    { path:config.routes.search, component: Search, layout: null },
    { path:config.routes.profile, component: Profile },
];

const privateRouters = [];

export { publicRouters, privateRouters };
