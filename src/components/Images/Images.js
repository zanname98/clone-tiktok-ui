import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Images.module.scss';
import images from '~/asset/images';

const Images = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            alt={alt}
            src={fallback || src}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
});
Images.propTypes = {
    src : PropTypes.string,
    alt : PropTypes.string,
    className : PropTypes.string,
    fallback : PropTypes.string,
} 
export default Images;
