import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import AccountItem from './AccountItem';
import styles from './SuggestedAccount.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccount({ babel }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('babel')}>{babel}</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('see-more')}>See more</p>
        </div>
    );
}
SuggestedAccount.prototype = {
    babel: PropTypes.string.isRequired,
};

export default SuggestedAccount;
