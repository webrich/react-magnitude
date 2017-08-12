import React from 'react';
import Node from './Node';
import PropTypes from 'prop-types';
import cn from 'classNames';

const Navs = ({children, className, placement, ...props}) => (
    <Node node='ul' className={ cn(className, placement) } {...props}>
        { children }
    </Node>
);

Navs.propTypes = {
    placement: PropTypes.oneOf(['left', 'right'])
};

export default Navs;