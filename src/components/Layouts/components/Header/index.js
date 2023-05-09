import { useEffect, useState } from 'react';

// tippy
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import images from '~/asset/images';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components//Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
console.log(images.logo);
function Header() {
    const [searchResult, setSeatchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSeatchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/* input */}

                <Tippy
                    interactive
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
                </Tippy>

                {/* Action */}
                <div className={cx('action')}>
                    <Button rounded>Upload</Button>
                    <Button primmary medium >
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
