import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        seperate: data.seperate,
    });
    return (
        <Button className={classes} onClick={onClick} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data:PropTypes.object.isRequired,
    onClick:PropTypes.func
}
export default MenuItem;
