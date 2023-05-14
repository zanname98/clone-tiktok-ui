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
function Menu({ children, items = [], onChange1 = defaultFn }) {
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
    return (
        <Tippy
            delay={(0, 700)}
            offset={[10, 10]} //vi tri
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('list-menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    // prev.splice(prev.length - 1)
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))} // Bấm ra ngoài luôn ở trang đầu
        >
            {children}
        </Tippy>
    );
}

export default Menu;
