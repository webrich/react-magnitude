import React from 'react';
import ReactDOM from 'react-dom';
import Node from './Node';
import PropTypes from 'prop-types';
import cn from 'classNames';
import * as Utils from './Utils';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        let {swipeable=false, fixedWidth=false, onShow, responsiveThreshold, className, ...remainingProps} = props;
        this.className = cn('tabs', className, {
            'tabs-fixed-width': fixedWidth
        }).trim();
        this._props = remainingProps;
        this.swipeable = swipeable;
        this.onShow = onShow;
        this.responsiveThreshold = responsiveThreshold;
    }

    componentDidMount() {
        if (typeof $ !== 'undefined') {
            $(ReactDOM.findDOMNode(this.refs.el)).tabs();
        }
    }

    render() {
        return (
            <Node ref='el' className={ this.className } {...this._props}>
                { this._props.children }
            </Node>
            );
    }
}

Tabs.propTypes = {
    fixedWidth: PropTypes.bool,
    swipeable: PropTypes.bool,
    onShow: PropTypes.func,
    responsiveThreshold: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Tabs;