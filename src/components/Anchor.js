import React from 'react';
import Node from './Node';
import PropTypes from 'prop-types';

const Anchor = ({children, target, ...props}) => <Node target={ target } node='a' {...props}>
                                                     { children }
                                                 </Node>;

Anchor.propTypes = {
    href: PropTypes.string,
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top'])
}

export default Anchor;