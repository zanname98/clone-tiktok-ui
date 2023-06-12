import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8ae043e14e9c63f0f03b456d4cc886c8~c5_100x100.jpeg?x-expires=1686556800&x-signature=jp9ej9%2Borq%2B0qa1bYw1zM2bLAwA%3D"
                    alt=""
                />
                <Button small primmary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('nickname')}>
                    <strong>Tips_th1138</strong>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className={cx('name')}>Tips_th1138</div>
                <div className={cx('analytics')}>
                    <p className={cx('value')}>8.2M</p>
                    <p className={cx('babel')}>Follower</p>
                    <p className={cx('value')}>8.2M</p>
                    <p className={cx('babel')}>Like</p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
