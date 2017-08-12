import React from 'react';
import Node from './Node';
import PropTypes from 'prop-types';
import cn from 'classNames';

const Progress = ({children, indeterminate=false, width='0%', ...props}) => (
    <Node className='progress'>
        <Node className={ cn({
                              'determinate': !indeterminate,
                              'indeterminate': indeterminate
                          }) } style={ { width: width } } />
    </Node>
);

export default Progress;