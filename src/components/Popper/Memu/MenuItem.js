import Button from '~/components/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} onClick={onClick} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}
export default MenuItem;
