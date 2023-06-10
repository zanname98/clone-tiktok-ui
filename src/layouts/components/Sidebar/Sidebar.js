import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

import styles from './Sidebar.module.scss';
import {
    IconHome,
    IconHomeActive,
    IconLiveActive,
    IconUserGroupActive,
    IconLive,
    IconUserGroup,
} from '~/components/Icon';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem to={config.routes.home} title="For you" iconActive={<IconHomeActive />} icon={<IconHome />} />
                <MenuItem
                    to={config.routes.following}
                    title="following"
                    iconActive={<IconUserGroupActive />}
                    icon={<IconUserGroup />}
                />
                <MenuItem to={config.routes.live} title="live" iconActive={<IconLiveActive />} icon={<IconLive />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
