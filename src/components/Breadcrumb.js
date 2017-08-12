import React from 'react';
import Anchor from './Anchor';
import cn from 'classNames';

export default ({children, className, ...props}) => <Anchor className={ cn('breadcrumb', className).trim() } {...props}>
                                                        { children }
                                                    </Anchor>;