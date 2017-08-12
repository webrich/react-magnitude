import React from 'react';
import Node from './Node';

export default ({children, ...props}) => (
    <Node node='blockquote' {...props}>
        { children }
    </Node>
);