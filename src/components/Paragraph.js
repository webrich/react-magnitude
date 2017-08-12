import React from 'react';
import Node from './Node';

export default ({children, ...props}) => <Node node='p' {...props}>
                                             { children }
                                         </Node>;