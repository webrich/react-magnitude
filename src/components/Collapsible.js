import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        let { className, onOpen, onClose, popout = false, expandable = false, ...remainingProps } = props;
        this.className = cn("collapsible", className, {
            popout: popout
        });
        this.expandable = expandable;
        this.onOpen = onOpen;
        this.onClose = onClose;
        this._props = remainingProps;
    }
    componentDidMount() {
        if (typeof $ !== "undefined" && $.fn.collapsible) {
            $(this.collapsible.el).collapsible({
                accordion: !this.expandable,
                onOpen: this.onOpen,
                onClose: this.onClose
            });
        }
    }
    render() {
        return (
            <Node
                ref={ref => (this.collapsible = ref)}
                node="ul"
                data-collapsible={this.expandable ? "expandable" : "accordion"}
                className={this.className}
                {...this._props}
            >
                {this._props.children}
            </Node>
        );
    }
}

Collapsible.propTypes = {
    popout: PropTypes.bool,
    expandable: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

class CollapsibleItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Node node="li" {...this.props}>
                {this.props.children}
            </Node>
        );
    }
}

CollapsibleItem.propTypes = {
    children: PropTypes.node.isRequired
};

class CollapsibleHeader extends React.Component {
    constructor(props) {
        super(props);
        let { className, active = false, ...remainingProps } = props;
        this.className = cn("collapsible-header", className, {
            active: active
        });
        this._props = remainingProps;
    }
    render() {
        return (
            <Node className={this.className} {...this._props}>
                {this._props.children}
            </Node>
        );
    }
}

CollapsibleHeader.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

class CollapsibleBody extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Node className={cn("collapsible-body", this.props.className)} {...this.props}>
                {this.props.children}
            </Node>
        );
    }
}

CollapsibleBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

Collapsible.Item = CollapsibleItem;
Collapsible.Header = CollapsibleHeader;
Collapsible.Body = CollapsibleBody;

export default Collapsible;
