import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faCircleQuestion,
    faEarthAfrica,
    faKeyboard,
    faUser,
    faGear,
    faCoins,
    faSignOut,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { IconInbox, IconMessage } from '~/components/Icon';
import config from '~/config';

import styles from './Header.module.scss';
import images from '~/asset/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Memu';
import Images from '~/components/Images';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAfrica} />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboad shortcuts' },
];

const MENU_USER = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@hoaa' },
    { icon: <FontAwesomeIcon icon={faGear} />, title: 'Setting', to: '/setting' },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/getCoins' },
    ...MENU_ITEMS,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/logout', seperate: true },
];
function Header() {
    const currentUser = true;
    // const onChange = (item) => {
    //     switch (item.key) {
    //         case 'language':
    //             break;
    //         default:
    //     }
    // };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                {/* input */}
                <Search />
                {/* Action */}

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button
                                className={cx('btn-upload')}
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                rounded
                                text
                            >
                                UpLoad
                            </Button>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('btn-action')}>
                                    <IconMessage classes="btn-icon" />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('btn-action')}>
                                    <IconInbox classes="btn-icon" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primmary medium>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? MENU_USER : MENU_ITEMS}>
                        {currentUser ? (
                            <Images
                                className={cx('btn-action')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2b51d341e7c375b8968474eaff734427.jpeg?x-expires=1684224000&x-signature=ViKCvO7%2BQWFSNUhgbNs5i5HR7BU%3D"
                                alt="avatart"
                                // fallback="https://lh3.googleusercontent.com/ogw/AOLn63EDbvyJPV-bHu9Dyyb6PU_YG0f8n6xNILH8vG_rmg=s32-c-mo"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
