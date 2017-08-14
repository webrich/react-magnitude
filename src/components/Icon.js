import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

class Icon extends React.Component {
    constructor(props) {
        super(props);
        let { className, size, circle = false, placement, node = "i", prefix = false, ...remainingProps } = props;
        this.className = cn(className, placement, size, "material-icons", {
            circle: circle,
            prefix: prefix
        });
        this.node = node;
        this._props = remainingProps;
    }

    render() {
        return (
            <Node className={this.className} node={this.node} {...this._props}>
                {this._props.children}
            </Node>
        );
    }
}

Icon.propTypes = {
    className: PropTypes.string,
    circle: PropTypes.bool,
    prefix: PropTypes.bool,
    placement: PropTypes.oneOf(["left", "right"]),
    size: PropTypes.oneOf(["tiny", "small", "medium", "large"]),
    children: PropTypes.node,
    node: PropTypes.string
};

export default Icon;
