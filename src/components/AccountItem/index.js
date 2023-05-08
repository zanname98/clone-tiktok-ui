import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1683723600&x-signature=VZNTVg074Nq0cqv1aFYt1lSQi7s%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <span className={cx('username')}>NguyenVanA</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                <p className={cx('name')}>Nguyen Van A</p>
            </div>
        </div>
    );
}

export default AccountItem;
