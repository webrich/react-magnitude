import React from 'react';
import Node from './Node';
import PropTypes from 'prop-types';
import cn from 'classNames';

class Divider extends React.Component {
    constructor(props) {
        super(props);
        let {className, node='div', ...remainingProps} = props;
        this.className = cn(className, 'divider');
        this.node = node;
        this._props = remainingProps;
    }

    render() {
        return (
            <Node className={ this.className } node={ this.node } {...this._props}/>
            );
    }
}

export default Divider;