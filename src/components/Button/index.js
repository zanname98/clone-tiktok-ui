import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    text = false,
    rounded = false,
    disabled = false,
    primmary = false,
    outline = false,
    small = false,
    medium = false,
    large = false,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primmary,
        outline,
        small,
        rounded,
        medium,
        large,
        text,
        disabled,
        leftIcon,
        rightIcon
    });

    const props = {
        onClick,
        ...passProps,
    };

    //remove event listener when btn is  disabled

    // if(disabled) {
    //     delete props.onClick;
    // }
    if (disabled) {
        Object.keys(props).forEach((key) => {
            // console.log(props[key])
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
