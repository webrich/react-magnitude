import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

class Badge extends React.Component {
    constructor(props) {
        super(props);
        let { node = "span", caption, className, ...remainingProps } = props;
        this._props = remainingProps;
        this.node = node;
        this.caption = caption || "";
        this.className = cn(className, "badge", {
            new: this.caption.trim().length > 0
        }).trim();
    }
    render() {
        return (
            <Node data-badge-caption={this.caption} className={this.className} node={this.node} {...this._props}>
                {this._props.children}
            </Node>
        );
    }
}

Badge.propTypes = {
    caption: PropTypes.string,
    node: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
};

export default Badge;
