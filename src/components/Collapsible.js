import React from 'react';
import ReactDOM from 'react-dom';
import Node from './Node';
import PropTypes from 'prop-types';
import cn from 'classNames';

class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        let {className, onOpen, onClose, popout=false, expandable=false, ...remainingProps} = props;
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

class CollapsibleItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Node node='li' {...this.props}>
                { this.props.children }
            </Node>
            );
    }
}

class CollapsibleHeader extends React.Component {
    constructor(props) {
        super(props);
        let {className, active=false, ...remainingProps} = props;
        this.className = cn('collapsible-header', className, {
            'active': active
        });
        this._props = remainingProps;
    }
    render() {
        return (
            <Node className={ this.className } {...this._props}>
                { this._props.children }
            </Node>
            );
    }
}

class CollapsibleBody extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Node className={ cn('collapsible-body', this.props.className) } {...this.props}>
                { this.props.children }
            </Node>
            );
    }
}

CollapsibleHeader.propTypes = {
    active: PropTypes.bool
};

CollapsibleItem.propTypes = {
    children: PropTypes.node.isRequired
};

Collapsible.propTypes = {
    popout: PropTypes.bool,
    expandable: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired
}

Collapsible.Item = CollapsibleItem;
Collapsible.Header = CollapsibleHeader;
Collapsible.Body = CollapsibleBody;

export default Collapsible;