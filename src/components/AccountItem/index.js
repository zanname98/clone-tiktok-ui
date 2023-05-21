import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Images from '~/components/Images';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Images className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <span className={cx('username')}>{data.full_name}</span>
                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                <p className={cx('name')}>{data.full_name}</p>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data :PropTypes.object.isRequired
}
export default AccountItem;
