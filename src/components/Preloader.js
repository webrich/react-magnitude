import React from 'react';
import Node from './Node';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import cn from 'classNames';

class Preloader extends React.Component {
    constructor(props) {
        super(props);
        let {size, active=true, ...remainingProps} = props;
        this.className = cn('preloader-wrapper', size, {
            'active': active
        }).trim();
        this._props = remainingProps;
    }

    render() {
        return (
            <Node className={ this.className }>
                { this._props.children }
            </Node>
            );
    }
}

Preloader.propTypes = {
    active: PropTypes.bool,
    size: PropTypes.oneOf(['big', 'small']),
    children: PropTypes.node.isRequired
}

export default Preloader;