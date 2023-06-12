import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import styles from '../SuggestedAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from '../AccountPreview/AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => (
        <div className={cx('preview-account')} tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive offset={[-20, 0]} placement="bottom" render={renderPreview} delay={[600, 0]}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('images')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8ae043e14e9c63f0f03b456d4cc886c8~c5_100x100.jpeg?x-expires=1686556800&x-signature=jp9ej9%2Borq%2B0qa1bYw1zM2bLAwA%3D"
                        alt=""
                    />
                    <div className={cx('info')}>
                        <p>
                            <strong className={cx('username')}>Tips_th1138</strong>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Tips_th1138</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
