// import React from 'react';
import PropTypes from 'prop-types';
import './GlobalStyle.scss'

function GlobalStyle({children}) {
    return children
    // return React.Children.only(children)   //Chỉ nhận một children duy nhất

}
GlobalStyle.propTypes = {
    children:PropTypes.node.isRequired
}
export default GlobalStyle;