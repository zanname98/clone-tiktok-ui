import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
// import Wrapper from '../Wrapper';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange1 = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; //Nếu có children thì trả vè true và ko trả về false
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange1(item);
                        }
                    }}
                />
            );
        });
    };
    const handleOnBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const renderMenuChildren = (attrs) => (
        <div className={cx('list-menu')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleOnBack} />}
                <div className={cx('menu-body')}> {renderItems()}</div>
            </PopperWrapper>
        </div>
    );
    const handleResetPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            offset={[10, 10]} //vi tri
            interactive
            placement="bottom-end"
            render={renderMenuChildren}
            onHide={handleResetPage} // Bấm ra ngoài luôn ở trang đầu
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange1: PropTypes.func,
};
export default Menu;
