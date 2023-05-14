import { useEffect, useState } from 'react';

// tippy
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import images from '~/asset/images';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsis,
    faEllipsisVertical,
    faCircleQuestion,
    faEarthAfrica,
    faKeyboard,
    faUpload,
    faMessage,
    faUser,
    faGear,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components//Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Memu';

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
    const [searchResult, setSeatchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSeatchResult([]);
        }, 0);
    }, []);
    const onChange = (item) => {
        switch (item.key) {
            case 'language':
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/* input */}

                <HeadlessTippy
                    interactive //select
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />

                        <button className={cx('clear')}>
                            {/* clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('btn-search')}>
                            {/* search */}
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                {/* Action */}

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                content="Upload"
                                delay={(0, 200)}
                                placement="bottom" // vi tri
                                // trigger="click" //click moi hien
                                // interactive //cho phep select
                            >
                                <button className={cx('btn-action')}>
                                    <FontAwesomeIcon icon={faUpload} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('btn-action')}>
                                    <FontAwesomeIcon icon={faMessage} />
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
                            <button className={cx('btn-action')}>
                                <img
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2b51d341e7c375b8968474eaff734427.jpeg?x-expires=1684224000&x-signature=ViKCvO7%2BQWFSNUhgbNs5i5HR7BU%3D"
                                    alt="avatart"
                                />
                            </button>
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
