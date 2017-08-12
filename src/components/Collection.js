import React from 'react';
import Node from './Node';
import PropTypes from 'prop-types';
import cn from 'classNames';

class Collection extends React.Component {
    constructor(props) {
        super(props);
        let {withHeader=false, node='ul', className, ...remainingProps} = props;
        this.className = cn(className, 'collection', {
            'with-header': withHeader
        }).trim();
        this.node = node;
        this._props = remainingProps;
    }
    render() {
        return (
            <Node className={ this.className } node={ this.node } {...this._props}>
                { this._props.children }
            </Node>
            );
    }
}

Collection.propTypes = {
    withHeader: PropTypes.bool
};

export default Collection;