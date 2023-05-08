import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import images from '~/asset/images';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
console.log(images.logo);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/* input */}
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
                {/* Action */}
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
