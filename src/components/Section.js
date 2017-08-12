import React from 'react';
import Node from './Node';
import cn from 'classnames';

export default ({children, className, ...props}) => (
    <Node className={ cn(className, 'section') } {...props}>
        { children }
    </Node>
);