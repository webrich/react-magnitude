import React from 'react';
import Node from './Node';
import PropTypes from 'prop-types';
import cn from 'classNames';

class Heading extends React.Component {
    constructor(props) {
        super(props);
        let {weight = '1', ...remainingProps} = props;
        this.node = 'h' + weight;
        this._props = remainingProps;
    }
    render() {
        return (<Node node={ this.node } {...this._props}>
                    { this._props.children }
                </Node>);
    }
}

Heading.propTypes = {
    weight: PropTypes.oneOf(['1', '2', '3', '4', '5', '6'])
};

export default Heading;