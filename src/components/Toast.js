import React from 'react';
import ReactDOM from 'react-dom';
import Node from './Node';
import PropTypes from 'prop-types';
import cn from 'classNames';

class Toast extends React.Component {
    constructor(props) {
        super(props);
        let {className, , ...remainingProps} = props;
        this.className = cn('collapsible', className, {
            'popout': popout
        });
        this.expandable = expandable;
        this.onOpen = onOpen;
        this.onClose = onClose;
        this._props = remainingProps;
    }
    componentDidMount() {
        if (typeof $ !== 'undefined') {
            $(ReactDOM.findDOMNode(this.refs.el)).collapsible({
                accordion: !this.expandable,
                onOpen: this.onOpen,
                onClose: this.onClose
            });
        }
    }
    render() {
        return (
            <Node ref='el' node='ul' data-collapsible={ this.expandable ? 'expandable' : 'accordion' } className={ this.className } {...this._props}>
                { this._props.children }
            </Node>
            );
    }
}